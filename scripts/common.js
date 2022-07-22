class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` < a href = "index.html" class="header-logo" >
            < img class="logo-img" src="assets/images/logo.png" alt="logo"
            /></ >

                <button
                    type="button"
                    class="login-tag btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                >
                    Login
                </button>`
    }
};

customElements.define('my-header', MyHeader);