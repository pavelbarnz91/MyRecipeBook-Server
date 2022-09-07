const htmls = {
    loginWindow: 
        `<div class="login column-centering" data-loginWindow="loginWindow">
        <div class="logo-box centering">
            <img class="logo-img" src="./images/logo.png">
        </div>

        <span class="login__title">Войдите или Зарегистрируйтесь</span>

        <form class="login-form column-centering" name="loginForm">
            <label class="login-form__inputs column-centering">
                <input class="login-form__input" type="email" placeholder="Email" data-loginWindow="loginInput" name="login">
                <input class="login-form__input" type="text" placeholder="Пароль" data-loginWindow="passInput" name="pass">
            </label>

            <div class="login-form__btns">
                <button class="login-form__btn" type="button" data-loginWindow="enterBtn">Вход</button>
            </div>
        </form>

        <a class="login__link-registr" href="#" data-loginWindow="regBtn">Зарегистрироваться</a>
    </div>`,

    regWindow: 
        ` <div class="registration column-centering" data-regWindow="window">
        <div class="logo-box centering">
            <img class="logo-img" src="./images/logo.png">
        </div>

        <span class="registration__title title">Зарегистрироваться</span>

        <form class="registration__form column-centering" data-regWindow="regForm">
            <label class="registration__form-input-box">
                <span>Ваше имя:</span>
                <input class="registration__form-input" type="text" name="name">
            </label>

            <label class="registration__form-input-box">
                <span>Ваша фамилия:</span>
                <input class="registration__form-input" type="text" name="lastname">
            </label>

            <label class="registration__form-input-box">
                <span>Ваш eMail:</span>
                <input class="registration__form-input" type="email" name="email">
            </label>

            <label class="registration__form-input-box">
                <span>Придумайте пароль:</span>
                <input class="registration__form-input" type="text" name="pass">
            </label>

            <label class="registration__form-input-box">
                <span>Повторите пароль:</span>
                <input class="registration__form-input" type="text" name="pass2">
            </label>

            <div class="registration__form-btns">
                <button class="registation__form-btn" type="button" data-regWindow="regComplieteBtn">Зарегистрироваться</button>
                <button class="registation__form-btn" type="button" data-regWindow="regCancelBtn">Отмена</button>
            </div>
        </form>
    </div>`,

    appWindow: 
        `<div class="mrb" data-mrb="mrb">
            <header class="mrb-header">
                <div class="logo-box">
                    <img class="header-logo-img" src="./images/logo.png" >
                </div>

                <div class="mrb-header__user-box">
                    <div class="user-box__user">
                        <span class="user-box__user" data-mrb="userName">asdfasdf</span>
                    </div>
                    <div class="user-box__user-avatar">
                        <img class="user-box__user-image" src="./images/user.png" data-mrb="userSettings">
                    </div>
                    <div class="user-box__settings">
                        <img class="user-box__settings-image" src="./images/settings.png" data-mrb="userSettings">
                    </div>
                </div>
            </header>
        </div>`
}

module.exports = htmls;