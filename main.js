import "./style.css"

document.querySelector("body").innerHTML = `
    <div class="overlay"></div>
    <header>
      <img src="/logo.svg" alt="logo" />
      <div class="mobile-menu" id="menu"><ion-icon name="menu-outline"></ion-icon></div>
      <div class="mobile-menu" id="close-menu"><ion-icon name="close-outline"></ion-icon></div>
      <nav class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </nav>
      <button class="request">Request Invite</button>
    </header>
    <div class="mobile-navigation"> 
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <main>
      <div class="top">
        <div class="mockups-mobile">
          <img src="/image-mockups.png" alt="smartphones with easybank's app" />
        </div>
        <div class="explanation">
          <div class="title">Next generation digital banking</div>
            <p class="text">
              Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.
            </p>
          <button class="request">Request Invite</button>
        </div>
        <div class="mockups">
          <img src="/image-mockups.png" alt="smartphones with easybank's app" />
        </div>
      </div>
      <section class="why">
        <div class="mediumtitle">Why choose Easybank?</div>
        <div class="text">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </div>
        <div class="cards-container">
          <div class="card">
            <img src="/icon-online.svg" alt="credit cards" />
            <div class="smalltitle">Online Banking</div>
            <div class="smalltext">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </div>
          </div>
          <div class="card">
            <img src="/icon-budgeting.svg" alt="smartphone billing" />
            <div class="smalltitle">Simple Budgeting</div>
            <div class="smalltext">
              See exactly where your money goes each month. Receive notifications
              when you’re close to hitting your limits.
            </div>
          </div>
          <div class="card">
            <img src="/icon-onboarding.svg" alt="people management" />
            <div class="smalltitle">Fast Onboarding</div>
            <div class="smalltext">
              We don’t do branches. Open your account in minutes online and start
              taking control of your finances right away.
            </div>
          </div>
          <div class="card">
            <img src="/icon-api.svg" alt="intelligence circuit" />
            <div class="smalltitle">Open API</div>
            <div class="smalltext">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </div>
          </div>
        </div>
      </section>
    <article class="articles">
      <div class="mediumtitle">Latest Articles</div>
      <div class="articles-container">
        <div class="article">
          <a href="#" target="_blank">
            <div class="article-image">
              <img src="/image-currency.jpg" alt="money" />
            </div>
          </a>
          <div class="article-content">
            <div class="article-credits">By Claire Robinson</div>
            <a href="#" target="_blank">
              <div class="article-title">
                Receive money in any currency with no fees
              </div>
            </a>
            <div class="article-text">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </div>
          </div>
        </div>
        <div class="article">
          <a href="#" target="_blank">
            <div class="article-image">
              <img src="/image-restaurant.jpg" alt="restaurant dish" />
            </div>
          </a>
          <div class="article-content">
            <div class="article-credits">By Wilson Hutton</div>
            <a href="#" target="_blank">
              <div class="article-title">
                Treat yourself without worrying about money
              </div>
            </a>
            <div class="article-text">
              Our simple budgeting
              feature allows you to separate out your spending and set realistic
              limits each month. That means you …
            </div>
          </div>
        </div>
        <div class="article">
          <a href="#" target="_blank">
            <div class="article-image">
              <img src="/image-plane.jpg" alt="plane window" />
            </div>
          </a>
          <div class="article-content">
            <div class="article-credits">By Wilson Hutton</div>
            <a href="#" target="_blank">
              <div class="article-title">
                Take your Easybank card wherever you go
              </div>
            </a>
            <div class="article-text">
              We want you to enjoy your travels. This is why we don’t charge any fees on purchases while
              you’re abroad. We’ll even show you …
            </div>
          </div>
        </div>
        <div class="article">
          <a href="#" target="_blank">
            <div class="article-image">
              <img src="/image-confetti.jpg" alt="confetti" />
            </div>
          </a>
          <div class="article-content">
            <div class="article-credits">By Claire Robinson</div>
            <a href="#" target="_blank">
              <div class="article-title">
                Our invite-only Beta accounts are now live!
              </div>
            </a>
            <div class="article-text">
                            After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </div>
          </div>
        </div>
      </div>
    </article>
    </main>
    <footer>
      <div class="left">
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20"><defs><linearGradient id="a" x1="72.195%" x2="17.503%" y1="0%" y2="100%"><stop offset="0%" stop-color="#33D35E"/><stop offset="100%" stop-color="#2AB6D9"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="#FAFAFA" fill-rule="nonzero" d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"/><g fill="url(#a)"><path d="M10.802 0L0 19.704h5.986L16.789 0z"/><path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z"/><path opacity=".15" d="M25.539 0L14.737 19.704h5.986L31.525 0z"/></g></g></svg>
        <div class="socials">
          <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
          <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="#"><ion-icon name="logo-pinterest"></ion-icon></a>
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
      </div>
      <div class="mid">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="right">
        <button class="request">Request Invite</button>
        <div class="copyright">© Easybank. All Rights Reserved</div>
      </div>
    </footer>
`
let menu = document.querySelector("#menu")
let nav = document.querySelector(".mobile-navigation")
let closemenu = document.querySelector("#close-menu")
let overlay = document.querySelector(".overlay")

menu.onclick = () => {
  menu.classList.add("hide")
  closemenu.classList.add("show")
  nav.classList.add("show")
  overlay.classList.add("show")
}

overlay.onclick = (e) => {
  if (e.target !== menu) {
    nav.classList.remove("show")
    overlay.classList.remove("show")
    closemenu.classList.remove("show")
    menu.classList.remove("hide")
  }
}

closemenu.onclick = () => {
  nav.classList.remove("show")
  overlay.classList.remove("show")
  closemenu.classList.remove("show")
  menu.classList.remove("hide")
}
