import '../../style.css';
import '../login/login.css';
import collage from '../../assets/login-collage.webp';

// 1. La función que renderiza el HTML no necesita cambios.
export function renderLogin() {
  return `
    <section class="login-intro view">
      <div class="login-welcome">
        <h2>Bienvenido a Streaming</h2>
        <p>Esta es la página de inicio de sesión para el proyecto de Streaming.</p>
        <button id="btn-login">Iniciar sesión</button>
        <button id="btn-register">Registrarse</button>
      </div>
      <div class="login-collage">
        <img src="${collage}" alt="Collage de inicio de sesión" />
      </div>
    </section>

    <section class="login-basic view" style="display: none;">
      <h2>Inicio de Sesión</h2>
      <form id="basic-login-form">
        <input type="text" name="username" placeholder="Usuario" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </section>

    <section class="login-section view" style="display: none;">
      <h2>Registro de Usuario</h2>
      <form id="login-form">
        <input type="text" name="username" placeholder="Usuario" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <input type="email" name="email" placeholder="Correo electrónico" required />
        <input type="text" name="nombre" placeholder="Nombre completo" required />
        <input type="tel" name="telefono" placeholder="Teléfono" />
        <input type="date" name="fechaNacimiento" placeholder="Fecha de nacimiento" />
        <input type="text" name="sexo" placeholder="Sexo / Género" />
        <input type="text" name="direccion" placeholder="Dirección" />
        <input type="text" name="ciudad" placeholder="Ciudad" />
        <input type="text" name="departamento" placeholder="Departamento / Estado" />
        <input type="text" name="pais" placeholder="País" />
        <input type="text" name="codigoPostal" placeholder="Código postal" />
        <input type="text" name="identificacion" placeholder="ID o número de cédula" />
        <input type="text" name="ocupacion" placeholder="Ocupación" />
        <input type="file" name="avatar" accept="image/*" />
        <button type="submit">Registrarse</button>
      </form>
    </section>
  `;
}

// 2. Modifica handleLoginEvents para que reciba renderRoute como parámetro
export function handleLoginEvents(renderRoute) {
  const btnLogin = document.getElementById('btn-login');
  const btnRegister = document.getElementById('btn-register');

  btnLogin?.addEventListener('click', () => {
    window.history.pushState({}, '', '/login/basic');
    renderRoute();
  });

  btnRegister?.addEventListener('click', () => {
    window.history.pushState({}, '', '/register');
    renderRoute();
  });

  window.addEventListener('popstate', () => renderRoute());

  // 3. Registro de usuario
  const registerForm = document.getElementById('login-form');
  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData.entries());

    if (!data.username || !data.password || !data.email) {
      alert('Usuario, contraseña y correo electrónico son obligatorios');
      return;
    }

    try {
      localStorage.setItem('userData', JSON.stringify(data));
      localStorage.setItem('isLoggedIn', 'true');
      alert('Usuario registrado correctamente');

      window.history.pushState({}, '', '/');
      renderRoute();
    } catch (error) {
      console.error('Error al guardar los datos en localStorage:', error);
      alert('No se pudo guardar el usuario');
    }
  });

  // 4. Login simplificado
  const basicLoginForm = document.getElementById('basic-login-form');
  basicLoginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = basicLoginForm.username.value.trim();
    const password = basicLoginForm.password.value.trim();

    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Inicio de sesión exitoso');
      window.history.pushState({}, '', '/');
      renderRoute();
    } else {
      alert('Usuario o contraseña no reconocidos');
    }
  });
}

// 5. La función renderRoute se mantiene sin cambios, pero debe ser importada o definida en el archivo principal.
export function renderRoute() {
  const loginIntro = document.querySelector('.login-intro');
  const loginBasic = document.querySelector('.login-basic');
  const loginRegister = document.querySelector('.login-section');

  if (loginIntro) loginIntro.style.display = 'none';
  if (loginBasic) loginBasic.style.display = 'none';
  if (loginRegister) loginRegister.style.display = 'none';

  const path = window.location.pathname;

  if (path === '/login') {
    if (loginIntro) loginIntro.style.display = 'flex';
  } else if (path === '/login/basic') {
    if (loginBasic) loginBasic.style.display = 'flex';
  } else if (path === '/register') {
    if (loginRegister) loginRegister.style.display = 'flex';
  } else {
    if (loginIntro) loginIntro.style.display = 'flex';
  }
}