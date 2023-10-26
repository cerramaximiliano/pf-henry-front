import { useState } from "react";
import CarouselAbout from "../../components/CarrouselAbout/CarouselAbout";
import ConfirmationDialog from "../../components/Buttons/ConfirmDialog";
export default function Aboutus () {
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Función para abrir el cuadro de diálogo de confirmación
    const openConfirmationDialog = () => {
      setShowConfirmation(true);
    };
    return (
        <div>
            <CarouselAbout/>
            <button onClick={openConfirmationDialog}>Abrir Confirmación</button>

      {/* Mostrar el cuadro de diálogo de confirmación cuando showConfirmation es true */}
      {showConfirmation && (
        <ConfirmationDialog
          action="modify About Us"
          onConfirm={() => {
            // Lógica para realizar la acción en About Us
            console.log('modify About Us confirm');
            setShowConfirmation(false); // Cierra el cuadro de diálogo
          }}
          onCancel={() => {
            setShowConfirmation(false); // Cierra el cuadro de diálogo al cancelar
          }}
        />
      )}
        </div>
    )
}