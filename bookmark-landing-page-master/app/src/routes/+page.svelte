<script lang="ts">
	import "../app.css"

	function scrollTop(){
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	// const options : string[]=["Simple Bookmarking", "Easy Searching", "Easy Sharing"]
</script>

<title>Bookmark Landing Page</title>

<header>
	<nav>
		<img id="logomark" src="./src/lib/images/logo-bookmark.svg" alt="bookmark logo">
		<div id="menu">
			<ul>
				<ol>features</ol>
				<ol>princing</ol>
				<ol>contact</ol>
			</ul>
		</div>
		<button id="menu-button"><img src="./src/lib/images/icon-hamburger.svg" alt="burger menu"></button>
	</nav>
</header>

<main id="body">

	<img id="blue-shape1" src="./src/lib/images/shapes.svg" alt="blue rectangle">
	<img id="tablette" src="./src/lib/images/illustration-hero.svg" alt="tablette illustration">


					<!-- A Simple Bookmark Manager -->

	<h1 id="a-simple-bookmark-manager">A Simple Bookmark Manager</h1>
	<p>A clean and simple interface to organize your favourite websites. Open a new browser tab an see your sites load instantly. Try it for free.</p>

	<div id="get-it">
		<button class="blue-btn" type="button">Get it on Chrome</button>
		<button class="white-btn" type="button">Get it on Firefox</button>
	</div>

							<!-- Features -->

	<h1 id="features">Features</h1>
	<p>Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sincs between your devices so you can access them on the go.</p>

	<div id="option-box">
		<div class="options">Simple Bookmarking</div>
		<div class="options">Easy Searching</div>
		<div class="options">Easy Sharing</div>
	</div>

	<img id="blue-shape2" src="./src/lib/images/shapes.svg" alt="blue rectangle">
	<img id="illustration-features" src="./src/lib/images/illustration-features-tab-1.svg" alt="Illustration features">


					<!-- Bookmark in one click -->

	<h1 id="bookmark-in-one-click">Bookmark in one click</h1>
	<p>Organize yout bookmarks however you like. Our simple drag-and-drop interface give you complete over how you manage your favourite sites.</p>



					<!-- Download the extention -->

	<h1 id="download-the-extension">Download the extention</h1>
	<p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>



					<!-- Frequently Ask Questions -->

	<h1 id="frequently-ask-questions">Frequently Ask Questions</h1>
	<p>Here are some of our FAQs if you have any other questions you'd like answered please feel free to email us.</p>

	<button id="more-info" type="button" class="blue-btn">More Info</button>
</main>

<footer>

	<section id="contact-us">
		<p id="already-joined">35.000+ already joined</p>
		<h1>Stay up-to-date with what's we're doing</h1>
		<input id="email-input" type="email" placeholder="Enter your email adress">
		<button class="red-btn" type="submit">Contact Us</button>
	</section>

	<section id="foot">
		<button id="go-top" onclick={scrollTop}>
		<img id="logomark-white" src="./src/lib/images/logo-bookmark-white.svg" alt="bookmark logo in white"></button>
		<a href="#features">Features</a>
		<a href="https://example.com/">Pricing</a>
		<a href="https://example.com/">Contact</a>
		<div id="social">
			<a href="https://facebook.com/"><img id="facebook" src="./src/lib/images/icon-facebook.svg" alt="Facebook logo"></a>
			<a href="https://x.com/"><img id="twitter" src="./src/lib/images/icon-twitter.svg" alt="Twitter logo"></a>
		</div>
	</section>

</footer>

<style>@import "../lib/css/mobile.css";</style>

<!-- TODO -->
<!--
menu rideau onclick
cards avec logomark
recherhe style input
animation section
 -->