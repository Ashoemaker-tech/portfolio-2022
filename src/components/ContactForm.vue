<script setup>

</script>

<template>
    <div class="my-20 mx-auto max-w-5xl">
        <form target="_blank"  action="https://formspree.io/f/mjvzokoy" method="POST">
            <div class="spacer-y">
                <div class="flex-form">
                    <div>
                        <input type="text" name="name"  placeholder="Name" autocomplete="off" required>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email"  autocomplete="off" required>
                    </div>
                    <div>
                        <textarea type="text" name="message" rows="15" placeholder="Message" required></textarea>
                    </div>
                </div>
                <div class="button-wrapper">
                 <button type="submit" class="contact-btn green">Send Message</button>
                </div>
            </div>
        </form>
    </div>

</template>

<style>
input, textarea {
    width: 75%;
    padding: .5rem;
    color: var(--color-text);
    font-size: 1.25rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    background-color: var(--color-background);
}
input {
    padding: 1rem;
}

input, textarea:focus {
    outline: none;
}
.flex-form input, textarea {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-btn {
    margin: 1rem auto;
    padding: 1rem 4rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background-color: transparent;
}

.contact-btn:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
}

@media (max-width: 768px) {
    input, textarea {
        width: 100%;
    }
}

</style>