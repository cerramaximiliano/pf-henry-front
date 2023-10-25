import logo from "../../assets/Logo(1).png";

export function Footer() {
    return (
        <div>
            <div className="absolute bg-graym w-full h-[250px] overflow-hidden text-left text-xl text-blackFred-100 font-monse">
                {/* Botón de suscripción */}
                <button className="absolute top-[82px] left-[1735px]  bg-redFred-300 text-blackFred-300 py-[8px] px-[24px] font-bebas rounded-sm">
                    submit
                </button>

                {/* Título de la sección de suscripción */}
                <p className="absolute font-bayon-bold top-[25px] left-[1476px] leading-[32px] text-orangeFred-300">
                    NEWSLETTER
                </p>

                {/* Formulario de suscripción */}
                <div>
                    <input
                        className="absolute top-[82px] left-[1476px]  bg-whiteFred-100 py-[8.5px] px-[24px] font-bebas rounded-sm w-[190px]"
                        placeholder="E-MAIL"
                    />
                    {/* Botones de redes sociales */}
                    <button className="absolute top-[153px] left-[1622px] rounded-sm bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1549px] rounded-sm bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1476px] rounded-sm bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1695px] rounded-sm bg-redFred-100 w-[54px] h-[54px]" />
                    <button className="absolute top-[153px] left-[1768px] rounded-sm bg-redFred-100 w-[54px] h-[54px]" />
                </div>

                <div>
                    {/* Enlaces de contacto y navegación */}
                    <p className="absolute top-[25px] font-bayon-bold left-[119px] leading-[32px] text-orangeFred-300">
                        CONTACT
                    </p>
                    <p className="absolute top-[25px] font-bayon-bold left-[274px] leading-[32px] text-orangeFred-300">
                        USEFUL LINE
                    </p>

                    {/* Contenido adicional */}
                    <p className="absolute top-[50px] font-inter text-blackFred-100 left-[274px] leading-[32px]">
                        Landing
                    </p>
                    <p className="absolute top-[50px] font-inter text-blackFred-100 left-[119px] leading-[32px]">
                        @gmail.com
                    </p>
                    {/* Otros elementos como enlaces, direcciones de correo electrónico, etc. */}

                    {/* Logo de la empresa */}
                    <img
                        className="absolute top-[50px] left-[690px] w-[300px] h-[200px] object-fit"
                        alt=""
                        src={logo}
                    />

                    {/* Derechos de autor */}
                    <div className="absolute top-[180px] left-[600px] leading-[32px] text-blackFred-100">
                        ©2023 GENSHYSUPLEMENTS. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </div>
    );
}
