import '../perfil/perfil.css';

export function Perfil() {
    const perfil = document.createElement('section');
    perfil.className = 'perfil';

    const userDataJSON = localStorage.getItem('userData');

    if (userDataJSON) {
        try {
            const userData = JSON.parse(userDataJSON);
            const { email, password, username, plan = 'Free' } = userData;

            if (email && password && typeof username === 'string' && username.trim() !== '') {
                perfil.innerHTML = `
                    <div class="container">
                        <div class="info">
                            <h1>Bienvenido, ${username}</h1>
                            <p><strong>Correo:</strong> ${email}</p>
                            <p><strong>Plan:</strong> ${plan}</p>
                            <button id="delete-account" class="danger">Eliminar cuenta</button>
                        </div>
                    </div>
                `;

                perfil.querySelector('#delete-account').addEventListener('click', () => {
                    localStorage.removeItem('userData');
                    alert('Cuenta eliminada');
                    location.href = '/login';
                });

                return perfil;
            } else {
                location.href = '/login';
                return null;
            }
        } catch (err) {
            console.error('Error al parsear userData:', err);
            location.href = '/login';
            return null;
        }
    } else {
        location.href = '/login';
        return null;
    }
}
