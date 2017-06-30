var store = {
	save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
	},
	fatch(key){
		return JSON.parse(localStorage.getItem(key)) || []
	}
}
var list = store.fatch("todos");
var filter = {
	all:function(list){
		return list
	},
	finished:function(list){
		return list.filter(function(item){
			return item.isChecked
		})
	},
	unfinished:function(list){
		return list.filter(function(item){
			return !item.isChecked
		})
	}
};
var vm = new Vue({
	el:'.content',
	data:{
		list:list,
		todo:'',
		entorTodos:'',
		beforeTitle:'',
		visibilty:'all'  //通过属性的变化对数据进行筛选
	},
	watch:{
		list:{
			handler:function(){
				store.save('todos',this.list)
			},
			deep:true
		}
	},
	computed:{
		noCheckeLength:function(){
			return this.list.filter(function(item){
                return !item.isChecked
			}).length
		},
		filteredList:function(){
			return filter[this.visibilty]?filter[this.visibilty](list):list;
		}
	},
	methods:{
		addtodo(){   // 添加列表
			this.list.push({title:this.todo,isChecked:false});
			this.todo = '';
		},
		delet(todo){  // 删除列表
			var index = this.list.indexOf(todo);
            this.list.splice(index,1);
		},
		editTodo(todo){  // 编辑列表
			// console.log(todo);
			this.entorTodos = todo;
			this.beforeTitle = todo.title;
		},
		edtorTodoed(todo){  // 编辑列表完成
			this.entorTodos = "";
		},
        cancelTodo(todo){
            todo.title = this.beforeTitle;
            this.entorTodos = "";
        }
	},
	directives:{
		"focus":{
            update(el,binding){
                if(binding.value == true){
                	el.focus();
                }
            }
		}
	}
})
function watchHashChange(){
	var hash = window.location.hash.slice(1);
	vm.visibilty = hash;
}
watchHashChange()
window.addEventListener('hashchange',watchHashChange)