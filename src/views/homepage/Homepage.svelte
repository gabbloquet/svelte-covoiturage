<script>
  import {onMount} from "svelte";
  import UserRoute from '../../components/user/DailyRoute.svelte'
  import UsersRoutes from '../../components/user/CommunityDailysRoutes.svelte'
  import {getAllUsers} from '../../utils/services/user/userService'


  export let user;
  let users = [];

  onMount( async () => {
      users = getAllUsers();
    }
  )
</script>

<main>
  <h1>Welcome {user.firstname} !</h1>

  <div>
    <h2>Your daily route</h2>
    <UserRoute user={user}/>
  </div>

  <div>
    <h2>Other members daily routes</h2>
    <UsersRoutes users="{users}"/>
  </div>
</main>

<style>
  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    color: var(--COLOR-PINK);
  }
</style>
