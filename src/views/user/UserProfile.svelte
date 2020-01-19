<script>
  export let user;
</script>

<style>

</style>

<div>
  <h2>{user.firstname}</h2>
  <h2>{user.lastname}</h2>
  <div>
    <h3>Daily Travel</h3>
    <p>{user.travel.from === '' ? 'Undefined' : user.travel.from }</p>
    <p>{user.travel.to === '' ? 'Undefined' : user.travel.to }</p>
  </div>
</div>
