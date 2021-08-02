<template>
	<div class="todo-app">
		<h1>{{ $t("todolist.title") }}</h1>
		<TodoList/>
	</div>
</template>

<script>
import TodoList from './TodoList.vue'

export default {
	components: {
		TodoList
	}
}
</script>