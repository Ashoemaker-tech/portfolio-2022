<?php require 'inc/header.php'; ?>
<div>
    <div class="container">
        <div class="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
            <div class="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
                <div class="title_flex w-full h-auto clear-both flex justify-between items-end">
                    <div class="left">
                        <span class="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">Contact</span>
                        <h3 class="font-extrabold font-montserrat">Get in Touch</h3>
                    </div>
                </div>
            </div>
            <div class="fields w-full float-left clear-both h-auto">
                <form action="/" method="post" class="contact_form" id="contact_form" autocomplete="off">
                    <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                    <div class="empty_notice"><span>Please Fill Required Fields</span></div>
                    <div class="first w-full float-left">
                        <ul class="list-none">
                            <li class="w-full mb-[30px] float-left">
                                <input class="px-2" id="name" type="text" placeholder="Name">
                            </li>
                            <li class="w-full mb-[30px] float-left">
                                <input class="px-2" id="email" type="text" placeholder="Email">
                            </li>
                        </ul>
                    </div>
                    <div class="last">
                        <textarea class="px-2" id="message" placeholder="Message"></textarea>
                    </div>
                    <div class="tokyo_tm_button">
                        <a id="send_message" href="#">
                            <span>Send Message</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php require 'inc/footer.php'; ?>