<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="icon" href="favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="Andrew Shoemaker" content="Portfolio site">
	<meta name="description" content="View the diverse range of creative work from Andrew Shoemaker, a Laravel and VueJs developer based in United States. From static sites to full stack applications, discover the latest projects and get in touch to collaborate.">
	<script src="https://unpkg.com/alpinejs" defer></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <title>Andrew Shoemaker</title>
</head>
<body class="dark">

    <!-- WRAPPER ALL -->
    <div x-data="{ mobileMenuOpen: false,}" class="tokyo_tm_all_wrap"> 

		<!-- MOBILE MENU -->
		<div class="tokyo_tm_topbar bg-white fixed top-0 left-0 right-0 h-[50px] z-[14] hidden">
			<div class="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
				<div>
					<a href="/">
						<h3 class="logo  text-3xl tracking-[4px]">AS</h3>
					</a>
				</div>
				<button @click="mobileMenuOpen = !mobileMenuOpen" class="relative trigger " aria-label="mobile menu">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
					</svg>
				</button>
			</div>
		</div>
		<div :class="mobileMenuOpen ? 'opened' : ''" class="tokyo_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300">
			<div class="menu_list w-full h-auto clear-both float-left text-right px-[20px] pt-[100px] pb-[0px]">
				<ul class="list-none transition_link">
					<li class="active mb-[7px]"><a class="text-black font-montserrat" href="/">Home</a></li>
					<li class="mb-[7px]"><a class="text-black font-montserrat" href="/about">About</a></li>
					<li class="mb-[7px]"><a class="text-black font-montserrat" href="/projects">Projects</a></li>
					<li><a class="text-black font-montserrat" href="/contact">Contact</a></li>
				</ul>
			</div>
		</div>
		<!-- /MOBILE MENU -->

		<!-- LEFTPART -->
		<div class="leftpart w-[450px] h-[100vh] fixed flex justify-center items-center z-[12] px-[100px] py-[0px] bg-white">
			<div class="w-full h-auto leftpart_inner">
				<div>
					<a href="#">
						<h3 class="logo text-4xl text-center tracking-[5px]">AS</h3>
					</a>
				</div>
				<div class="menu px-[0px] py-[50px] w-full float-left">
					<ul class="m-0 text-center list-none transition_link">
						<li class="float-left w-full m-0 <?= $_SERVER['REQUEST_URI'] === '/' ? 'active' : ''; ?>"><a class="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="/">Home</a></li>
						<li class="float-left w-full m-0 <?= $_SERVER['REQUEST_URI'] === '/about' ? 'active' : ''; ?>"><a class="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="/about">About</a></li>
						<li class="float-left w-full m-0 <?= $_SERVER['REQUEST_URI'] === '/projects' ? 'active' : ''; ?>"><a class="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="/projects">Projects</a></li>
						<li class="float-left w-full m-0 <?= $_SERVER['REQUEST_URI'] === '/contact' ? 'active' : ''; ?>"><a class="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="/contact">Contact</a></li>
					</ul>
				</div>
				<div class="w-full copyright">
					<p class="text-[15px] text-[#999] font-montserrat leading-[25px]">&copy; 2022 Andrew Shoemaker</p>
				</div>
			</div>
		</div>
		<!-- /LEFTPART -->

		<!-- RIGHTPART -->
		<div class="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
			<div class="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">