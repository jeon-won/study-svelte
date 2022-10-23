<script>
  import { goto } from "$app/navigation";
  import axios from 'axios';
  let email = "", password = "";
  let token = "";

  const submit = async () => {
    axios({ // axios로 서버에 사용자 등록 정보 전송
      method: "POST",
      url: "http://localhost:3000/login",
      data: { email, password }
    }).then(res => { // 사용자 등록 성공한 경우 성공 메시지 출력 후 로그인 페이지로 이동
      if(res.status === 200) { 
        console.log(res);
        token = res.data.token; 
        goto("/");
      }
    }).catch(error => { // 사용자 등록 실패한 경우 서버가 보내온 메시지 출력
      alert(error.response.data.msg);
    });
  }
</script>

<div class="form-signin w-100 m-auto">
  <form on:submit|preventDefault={submit}>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input bind:value={email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input bind:value={password} type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</div>