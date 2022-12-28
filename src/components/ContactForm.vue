<script setup>

</script>

<template>
    <div class="my-20 mx-auto max-w-5xl">
        <form target="_blank"  action="https://formspree.io/f/mjvzokoy" method="POST">
            
                <div class="flex-form">
                    <div>
                        <input type="text" name="name" placeholder="Your name..." class="input input-bordered w-full mb-4 shadow-lg" required />
                    </div>
                    <div>
                        <input type="email" name="email" autocomplete="off" placeholder="Your email" class="input input-bordered w-full mb-4 shadow-lg" required />
                    </div>
                    <div>
                        <textarea class="textarea textarea-bordered w-full mb-4 shadow-lg" type="text" name="message" rows="8" placeholder="Message" required></textarea>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="btn btn-primary btn-outline shadow-xl">Send Message</button>
                </div>
        </form>
    </div>

</template>
