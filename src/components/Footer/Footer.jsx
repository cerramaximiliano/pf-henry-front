import logo from "../../assets/Logo(1).png";

export function Footer() {
    return (
        <div className="mx-auto">
            <div className="relative bg-whiteFred-100 w-full h-[250px] overflow-hidden text-left text-xl text-blackFred-100">
                {/* Botón de suscripción */}
                <button className="absolute top-[82px] left-[1700px]  bg-redFred-300 text-blackFred-300 py-[8px] px-[28px] font-bebas rounded-sm">
                    submit
                </button>

                {/* Título de la sección de suscripción */}
                <p className="absolute font-impact  top-[25px] left-[1476px] leading-[32px] text-orangeFred-300">
                    NEWSLETTER
                </p>

                {/* Formulario de suscripción */}
                <div>
                    <input
                        className="absolute top-[82px] left-[1320px]  bg-whiteFred-100 py-[8.5px] px-[24px] font-bebas rounded-sm w-[320px]"
                        placeholder="E-MAIL"
                    />
                    {/* Botones de redes sociales */}
                    <button className="absolute top-[153px] left-[1320px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1380px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1440px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1500px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1560px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1620px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1680px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1740px] rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                </div>

                <div>
                    {/* Enlaces de contacto y navegación */}
                    <p className="absolute top-[25px] font-impact left-[120px] leading-[32px] text-orangeFred-300">
                        CONTACT
                    </p>
                    <p className="absolute top-[25px] font-impact left-[320px] leading-[32px] text-orangeFred-300">
                        USEFUL LINE
                    </p>
                    <p className="absolute top-[25px] font-impact left-[520px] leading-[32px] text-orangeFred-300">
                        DEVELOPERS
                    </p>

                    {/* Contenido adicional */}
                    <p className="absolute transition duration-400 ease-in-out hover:text-redFred-100 hover:text-9xl top-[50px] font-inter text-blackFred-100 left-[320px] leading-[32px]">
                        Landing
                    </p>
                    <p className="absolute transition duration-400 ease-in-out hover:text-redFred-100 hover:text-9xl top-[50px] font-inter text-blackFred-100 left-[119px] leading-[32px]">
                        @gmail.com
                    </p>
                    {/* Otros elementos como enlaces, direcciones de correo electrónico, etc. */}

                    {/* Logo de la empresa */}
                    <img
                        className="absolute top-[50px] left-[840px] w-[250px] h-[180px] object-fit"
                        alt=""
                        src={logo}
                    />

                    {/* Derechos de autor */}
                    <div className="absolute top-[180px] left-[750px] leading-[32px] text-blackFred-100">
                        ©2023 GENSHYSUPLEMENTS. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </div>
    );
}
