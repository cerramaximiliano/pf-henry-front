import logo from "../../assets/Logo(1).png";

export function Footer() {
    return (
        <div className="mx-auto">
            <div className="
            sm:h-[650px]
            relative bg-whiteFred-100 h-[250px] text-left text-xl text-blackFred-100">
                {/* Botón de suscripción */}
                <button className="relative bg-redFred-300 text-blackFred-300 py-[8px] px-[28px] font-bebas rounded-sm">
                    submit
                </button>

                {/* Título de la sección de suscripción */}
                <p className="relative font-impact leading-[32px] text-orangeFred-300">
                    NEWSLETTER
                </p>

                {/* Formulario de suscripción */}
                <div>
                    <input
                        className="relative  bg-whiteFred-100 py-[8.5px] px-[24px] font-bebas rounded-sm w-[320px]"
                        placeholder="E-MAIL"
                    />
                    {/* Botones de redes sociales */}
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="relative rounded-sm transition transform hover:scale-110 bg-redFred-100 w-[54px] h-[54px]" />
                </div>

                <div>
                    {/* Enlaces de contacto y navegación */}
                    <p className="relative font-impact  leading-[32px] text-orangeFred-300">
                        CONTACT
                    </p>
                    <p className="relative font-impact  leading-[32px] text-orangeFred-300">
                        USEFUL LINE
                    </p>
                    <p className="relative font-impact  leading-[32px] text-orangeFred-300">
                        DEVELOPERS
                    </p>

                    {/* Contenido adicional */}
                    <p className="relative transition duration-400 ease-in-out hover:text-redFred-100 hover:text-9xl  font-inter text-blackFred-100 leading-[32px]">
                        Landing
                    </p>
                    <p className="relative transition duration-400 ease-in-out hover:text-redFred-100 hover:text-9xl  font-inter text-blackFred-100 leading-[32px]">
                        @gmail.com
                    </p>
                    {/* Otros elementos como enlaces, direcciones de correo electrónico, etc. */}

                    {/* Logo de la empresa */}
                    <img
                        className="relative w-[250px] h-[180px] object-fit"
                        alt=""
                        src={logo}
                    />

                    {/* Derechos de autor */}
                    <div className="relative leading-[32px] text-blackFred-100">
                        ©2023 GENSHYSUPLEMENTS. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </div>
    );
}