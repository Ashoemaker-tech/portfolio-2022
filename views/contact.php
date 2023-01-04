<?php

$errorMsg = '';
// Put contacting email here
$php_main_email = "andrew.shoemaker9@gmail.com";

if(filter_has_var(INPUT_POST, 'submit')) {
	$name = $_POST['name'];
	$email = $_POST['email'];
    $message = $_POST['message'];

    if (empty($email) || empty($name) || empty($message)) {
        $errorMsg = '<div class="px-6 py-4 text-lg text-center" style="background-color: red; color: white; margin-bottom: 20px; font-size: 18px;">Please fill in all fields</div>';
    }

	//Sanitizing email
	$php_email = filter_var($email, FILTER_SANITIZE_EMAIL);

    
	//After sanitization Validation is performed
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		
		
			$php_subject = "Message from contact form";
			
			// To send HTML mail, the Content-type header must be set
			$php_headers = 'MIME-Version: 1.0' . "\r\n";
			$php_headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$php_headers .= 'From:' . $email. "\r\n"; // Sender's Email
			$php_headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
			
			$php_template = '<div style="padding:50px;">Hello ' . $name . ',<br/>'
			. 'Thank you for contacting us.<br/><br/>'
			. '<strong style="color:#f00a77;">Name:</strong>  ' . $name . '<br/>'
			. '<strong style="color:#f00a77;">Email:</strong>  ' . $email . '<br/>'
			. '<strong style="color:#f00a77;">Message:</strong>  ' . $message . '<br/><br/>'
			. 'This is a Contact Confirmation mail.'
			. '<br/>'
			. 'We will contact you as soon as possible .</div>';
			$php_sendmessage = "<div style=\"background-color:#f5f5f5; color:#333;\">" . $php_template . "</div>";
			
			// message lines should not exceed 70 characters (PHP rule), so wrap it
			$php_sendmessage = wordwrap($php_sendmessage, 70);
			
			// Send mail by PHP Mail Function
			mail($php_main_email, $php_subject, $php_sendmessage, $php_headers);
			echo "";
		
	} else if(!filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($name) && !empty($message)) {
        $errorMsg = '<div class="px-6 py-4 text-lg text-center" style="background-color: red; color: white; margin-bottom: 20px; font-size: 18px;">Invalid Email</div>';
	}
}

?>


<?php require 'inc/header.php'; ?>
<div>
    <div class="container">
    
        <div class="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
            <div class="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
                <div class="flex items-end justify-between clear-both w-full h-auto title_flex">
                    <div class="left">
                        <span class="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">Contact</span>
                        <h3 class="font-extrabold font-montserrat">Get in Touch</h3>
                    </div>
                </div>
            </div>
            <div class="float-left clear-both w-full h-auto fields">
                <form method="POST"   class="contact_form" autocomplete="off">
                    <?php if($errorMsg != ''): ?>
                        <?= $errorMsg ?>
                    <?php endif; ?>
                    <div class="float-left w-full first">
                        <ul class="list-none">
                            <li class="w-full mb-[30px] float-left">
                                <input class="px-2" name="name" type="text" placeholder="Name" required>
                            </li>
                            <li class="w-full mb-[30px] float-left">
                                <input class="px-2" name="email" type="email" placeholder="Email" required>
                            </li>
                        </ul>
                    </div>
                    <div class="last">
                        <textarea class="px-2" name="message" placeholder="Message" required></textarea>
                    </div>
                    <div>
                        <button type="submit" name="submit" class="px-4 py-2 text-black bg-white">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php require 'inc/footer.php'; ?>