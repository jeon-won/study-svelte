<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import todos from "./todos.svelte";
  import Todo from "./Todo.svelte";

  const a = todos.subscribe((v) => {

  });

</script>

<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="https://avatars.githubusercontent.com/u/56036601?v=4" alt="Avatar Logo" style="width:40px;" class="rounded-pill">  
      <span>Svelte App</span>
    </a>
  </div>
</nav>

<div class="container p-3">
  <h1 class="text-center">TODO LIST</h1>
  <div class="p-3 mb-2 bg-light">
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">무엇을 해야 하나요?</label>
      <div><Todo /></div>
      
    </div>
  </div>
</div>
<!-- <div class="container-lg mt-3">
  <h1 class="text-center">TODO LIST</h1>
  <div class="row">
    <div class="col-sm p-3 bg-primary text-white">
      <p class="fs-5 fw-bold">해야할 일</p>
      <input class="form-control" type="text" placeholder="무엇을 해야 하나요?">
      <Todo />
    </div>
    <div class="col-sm p-3 bg-secondary text-white">
      <p class="fs-5 fw-bold">하고있는 일</p>
      <input class="form-control" type="text" placeholder="무엇을 하고 있나요?">
    </div>
    <div class="col-sm p-3 bg-success text-white">
      <p class="fs-5 fw-bold">끝난 일</p>
      <input class="form-control" type="text" placeholder="무엇을 끝냈나요?">
    </div>
  </div>
</div> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

* {
  font-family: 'Nanum Gothic', sans-serif;
}

h1 {
  color: #F22208;
}

input {
  width: 100%;
}
</style>