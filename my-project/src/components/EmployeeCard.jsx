import { useRef } from "react";


const EmployeeCard = ({ employee }) => {

  const { id, name, email, phone, website, company } = employee;

  const cardRef = useRef();

  const profileImage = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  const downloadCard = async () => {
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement("a");
    link.download = `${name}-card.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      
      <div
        ref={cardRef}
        className="w-80 bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100 hover:scale-105 transition duration-300"
      >

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={profileImage}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {name}
        </h2>

        {/* Employee Details */}
        <div className="text-gray-600 text-sm space-y-2 text-left">
          <p className="flex justify-between">
            <span className="font-semibold">ID:</span>
            <span>{id}</span>
          </p>

          <p className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span className="truncate">{email}</span>
          </p>

          <p className="flex justify-between">
            <span className="font-semibold">Phone:</span>
            <span>{phone}</span>
          </p>

          <p className="flex justify-between">
            <span className="font-semibold">Website:</span>
            <span className="text-blue-500">{website}</span>
          </p>

          <p className="flex justify-between">
            <span className="font-semibold">Company:</span>
            <span>{company?.name}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Print
          </button>

          <button
            onClick={downloadCard}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            
            Download
          </button>
        </div>

      </div>

    </div>
  );
};

export default EmployeeCard;