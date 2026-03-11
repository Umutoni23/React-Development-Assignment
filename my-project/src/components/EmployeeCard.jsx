import html2canvas from "html2canvas";

function EmployeeCard({ employee }) {
  const { id, name, email, phone, website, company } = employee;

  const downloadCard = () => {
    const card = document.getElementById(`card-${id}`);

    html2canvas(card).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${name}-employee-card.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const printCard = () => {
    const card = document.getElementById(`card-${id}`).innerHTML;
    const win = window.open("", "", "width=800,height=600");
    win.document.write(card);
    win.document.close();
    win.print();
  };

  return (
    <div className="card" id={`card-${id}`}>
      <h3>{name}</h3>

      <p><strong>ID:</strong> {id}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>
      <p><strong>Company:</strong> {company.name}</p>

      <div className="buttons">
        <button onClick={downloadCard}>Download</button>
        <button onClick={printCard}>Print</button>
      </div>
    </div>
  );
}

export default EmployeeCard;