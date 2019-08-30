//向服务器发送请求 索要随机推荐数据
$.ajax({
        type: 'get',
        url: '/posts/random',
        success: function(res) {
            // console.log(res);

            var randomTpl = `
			{{each data}}
			<li>
			  <a href="detail.html?id={{$value._id}}">
			    <p class="title">{{$value.title}}</p>
			    <p class="reading">阅读({{$value.meta.views}})</p>
			    <div class="pic">
			      <img src="{{$value.thumbnail}}" alt="">
			    </div>
			  </a>
			</li>
			{{/each}}
		`;
            var html = template.render(randomTpl, { data: res });
            $('#randomBox').html(html)
        }
    })
    //向服务器端发送请求 索要文章分类列表数据
$.ajax({
        type: 'get',
        url: '/categories',
        success: function(response) {
            var navTpl = `
        {{each data}}
        <li>
            <a href="list.html?categoryId={{$value._id}}">
                <i class="fa {{$value.className}}"></i>{{$value.title}}
            </a>
        </li>
        {{/each}}`;
            var html = template.render(navTpl, { data: response });
            $('.nav_item').html(html)
        }
    })
    //获取搜索表单 并为其添加表单提交事件
$('.search form').on('submit', function() {
    //阻止表单默认提交行为
    alert('1')
    var keys = $(this).find('.keys').val();
    //调转到搜索结果页面 并将用户输入的搜索的关键字传入到搜索结果页面
    location.href = "/search.html?key=" + keys
    return false;
})