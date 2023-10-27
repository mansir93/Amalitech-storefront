import React from "react";

const Table = () => {
  const tableData = [
    {
      vendor: "James Cottage",
      id: "122334482",
      item: "366",
      commission: "20%",
    },
    {
      vendor: "John's Electronics",
      id: "987654321",
      item: "789",
      commission: "15%",
    },
    {
      vendor: "Sara's Accessories",
      id: "456789012",
      item: "123",
      commission: "10%",
    },
    {
      vendor: "Tech Solutions Inc.",
      id: "111222333",
      item: "555",
      commission: "18%",
    },
    {
      vendor: "Gadget Universe",
      id: "999000111",
      item: "777",
      commission: "12%",
    },
    {
      vendor: "ElectroMart",
      id: "123456789",
      item: "111",
      commission: "14%",
    },
    {
      vendor: "Tech Wonders",
      id: "777888999",
      item: "333",
      commission: "25%",
    },
    {
      vendor: "Gizmo Palace",
      id: "444555666",
      item: "999",
      commission: "8%",
    },
    {
      vendor: "Digital Dreams",
      id: "888999000",
      item: "222",
      commission: "16%",
    },
    {
      vendor: "Accessory Corner",
      id: "555666777",
      item: "444",
      commission: "12%",
    },
  ];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-blue-950">
        <thead className="text -xs font-bold  text-gray -700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Vendor
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              ITem
            </th>
            <th scope="col" className="px-6 py-3">
              Commission
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-white border-b"
                  : "bg-white "
              }
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {rowData.vendor}
              </th>
              <td className="px-6 py-4">{rowData.id}</td>
              <td className="px-6 py-4">{rowData.item}</td>
              <td className="px-6 py-4">{rowData.commission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
