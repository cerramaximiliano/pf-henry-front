import logo from "../../assets/Logo.png";

export function Footer() {
    return (
        <div className="relative top-auto bg-gray-200 w-full h-[350px] overflow-hidden text-left text-xl text-gray-100 font-inter">
            {/* Botón de suscripción */}
            <button className="absolute top-[82px] left-[1695px] rounded-lg bg-darkorange w-[127px] h-[54px]">
                submit
            </button>

            {/* Título de la sección de suscripción */}
            <p className="absolute top-[25px] left-[1476px] leading-[32px] text-darkorange">
                NEWSLETTER
            </p>

            {/* Formulario de suscripción */}
            <div>
                <input
                    className="absolute top-[82px] left-[1476px] rounded-lg bg-gainsboro w-[200px] h-[48px]"
                    placeholder="E-MAIL"
                />
                {/* Botones de redes sociales */}
                <button className="absolute top-[153px] left-[1622px] rounded-lg bg-darkorange w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1549px] rounded-lg bg-darkorange w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1476px] rounded-lg bg-darkorange w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1695px] rounded-lg bg-darkorange w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1768px] rounded-lg bg-darkorange w-[54px] h-[54px]" />
            </div>

            <div>
                {/* Enlaces de contacto y navegación */}
                <p className="absolute top-[50px] left-[119px] leading-[32px] text-darkorange">
                    CONTACT
                </p>
                <p className="absolute top-[50px] left-[474px] leading-[32px] text-darkorange">
                    USEFUL LINE
                </p>
                <p className="absolute top-[50px] left-[859px] leading-[32px] text-darkorange">
                    RECENT CHANGES  
                </p>
                
                {/* Contenido adicional */}
                <p className="absolute top-[89px] left-[859px] leading-[32px]">
                    payment methods
                </p>
                <p className="absolute top-[89px] left-[474px] leading-[32px]">
                    Landing
                </p>
                <p className="absolute top-[89px] left-[119px] leading-[32px]">
                    @gmail.com
                </p>
                {/* Otros elementos como enlaces, direcciones de correo electrónico, etc. */}
                
                {/* Logo de la empresa */}
                <img
                    className="absolute top-[80px] left-[1130px] w-[200px] h-[150px] object-fit"
                    alt=""
                    src={logo}
                />

                {/* Derechos de autor */}
                <div className="absolute top-[284px] left-[849px] leading-[32px] text-white">
                    ©2023 GENSHYSUPLEMENTS. Todos los derechos reservados.
                </div>
            </div>
        </div>
    );
}
