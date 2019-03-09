/*
 * @Author:  吴信科#fig 
 * @Date: 2019-03-08 22:18:22 
 * @Last Modified by:  吴信科#fig
 * @Last Modified time: 2019-03-09 12:44:21
 */
/*
 * 我爬我自己.js
 * 用于 中南民族大学webplus系统，网页数据增强.可以实现更多样的布局
 * html模板：
 * 
 * <div class="..." id="...">
 *      <table border="0" cellpadding="0" cellspacing="0">
 *          <tr>
 *              <td>[频道1]</td>
 *          </tr>
 *       </table>
 * </div>
 * 
 * 要求：id必须，dom结构与模板相同
 */

/**
 * 用于获取列表页
 * @id  ID值 String
 * @return 返回值：json数组 [{time:'时间'，title:'标题'，url:'文章链接'},{...}]
 */
function getList(id) {
    //获取每行的 <table></table>
    var domArr_table=document.getElementById(id).getElementsByTagName("table")[0].getElementsByTagName("table");
    var json=[];
    for (let i = 0; i < domArr_table.length; i++) {
        var dom = domArr_table[i],
            time=dom.getElementsByTagName('div')[0].innerHTML,
            url=dom.getElementsByTagName('a')[0].href,
            title=dom.getElementsByTagName('a')[0];
        //标题有时会是特殊情况
        if (!title.firstElementChild) {
            title=title.innerHTML;
        }else{
            title=title.getElementsByTagName('b')[0].innerHTML;
        }
        //堆入数组
        json.push({
            'time':time,
            'title':title,
            'url':url,
        });
    }
    return json;
}
//
// console.log(getList('list-2'));