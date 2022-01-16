<script>
	import { Fetch } from "../Libs/fetch.js";

	import Layout from "../Components/Layout/index.svelte";
	import TitlePage from "../Components/TitlePage/index.svelte";
	import SLAPanel from "../Components/SLAPanel/index.svelte";
	import TicketDetails from "../Components/TicketDetails/index.svelte";

	// fetch info and save in store
	Fetch();
</script>

<Layout>
	<div class="container">
		<TitlePage title={"SLA - iColabora"} />
		<SLAPanel />
		<br />
		<TicketDetails />
	</div>
</Layout>

<style lang="scss">
	@import "./style.scss";
</style>
