# 我爬我自己

用于 中南民族大学**webplus**系统，网页数据增强.可以实现更多样的布局

### html模板：

​	*要求：id必须，dom结构与模板相同*



~~~
<div class="..." id="...">
    <table border="0" cellpadding="0" cellspacing="0">
        <tr>
           <td>[频道1]</td>
        </tr>
    </table>
</div>
~~~

### 使用
~~~
var arr=getList('id');
~~~

​	可以使用`import` 语法

### 参数

​	id:目标id值

### 返回值

~~~
[{
  'time':time,
  'title':title,
  'url':url,
},
{
  'time':time,
  'title':title,
  'url':url,
}，
...
]
~~~

