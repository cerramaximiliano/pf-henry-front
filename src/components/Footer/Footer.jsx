import logo from "../../assets/Logo.png";

export function Footer() {
    return (
        <div className="relative top-auto bg-blackFred-100 w-full h-[350px] overflow-hidden text-left text-xl text-blackFred-100 font-monse">
            {/* Botón de suscripción */}
            <button className="absolute top-[82px] left-[1735px]  bg-orangeFred-300 text-blackFred-300 py-[8px] px-[24px] font-bebas rounded-none">
                submit
            </button>

            {/* Título de la sección de suscripción */}
            <p className="absolute top-[25px] left-[1476px] leading-[32px] text-orangeFred-300">
                NEWSLETTER
            </p>

            {/* Formulario de suscripción */}
            <div>
                <input
                    className="absolute top-[82px] left-[1476px]  bg-whiteFred-300 py-[8.5px] px-[24px] font-bebas rounded-none w-[190px]"
                    placeholder="E-MAIL"
                />
                {/* Botones de redes sociales */}
                <button className="absolute top-[153px] left-[1622px] rounded-none bg-orangeFred-300 w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1549px] rounded-none bg-orangeFred-300 w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1476px] rounded-none bg-orangeFred-300 w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1695px] rounded-none bg-orangeFred-300 w-[54px] h-[54px]" />
                <button className="absolute top-[153px] left-[1768px] rounded-none bg-orangeFred-300 w-[54px] h-[54px]" />
            </div>

            <div>
                {/* Enlaces de contacto y navegación */}
                <p className="absolute top-[50px] left-[119px] leading-[32px] text-orangeFred-300">
                    CONTACT
                </p>
                <p className="absolute top-[50px] left-[474px] leading-[32px] text-orangeFred-300">
                    USEFUL LINE
                </p>
                <p className="absolute top-[50px] left-[859px] leading-[32px] text-orangeFred-300">
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
                <div className="absolute top-[284px] left-[849px] leading-[32px] text-whiteFred-300">
                    ©2023 GENSHYSUPLEMENTS. Todos los derechos reservados.
                </div>
            </div>
        </div>
    );
}
