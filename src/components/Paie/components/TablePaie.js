import React from "react";
import moment from "moment-timezone";
const EtablissementSection = ({ etablissement, branche }) => {
  return (
    <div className="p-2">
      <h1 className="font-medium">
        {etablissement?.label} {branche?.label}
      </h1>
      <p className="font-extralight text-sm text-gray-500">
        {" "}
        {branche?.adresse}
      </p>
      <div className="flex justify-between">
        <label className="font-medium">MatriculeFiscale :</label>
        <p className="font-extralight">{etablissement?.matriculeFiscale}</p>
      </div>
      <div className="flex justify-between">
        <label className="font-medium">CNSS :</label>
        <p className="font-extralight">{etablissement?.ncnss}</p>
      </div>
      <div className="flex justify-between">
        <label className="font-medium">pays :</label>
        <p className="font-extralight">{etablissement?.pays}</p>
      </div>
      <div className="flex justify-between">
        <label className="font-medium">Register Commerce :</label>
        <p className="font-extralight">{etablissement?.registreCommerce}</p>
      </div>
      <div className="flex justify-between">
        <label className="font-medium">Rib :</label>
        <p className="font-extralight">{etablissement?.rib}</p>
      </div>
      <div className="flex justify-between">
        <label className="font-medium">Tel :</label>
        <p className="font-extralight">{branche?.tel}</p>
      </div>
    </div>
  );
};
const PeriodeSection = ({ date }) => {
  return (
    <div className="p-2 w-full grid  place-items-center h-min gap-8">
      <h1 className="text-6xl">Bulleten de Paie</h1>
      <table className="w-3/4">
        <tbody>
          <tr>
            <td className="py-2.5">
              <label className="mr-5">Période du </label>
              {moment(date).startOf("month").format("DD/MM/YYYY")}
            </td>
            <td className="py-2.5">
              <label className="mr-5">au</label>
              {moment(date).endOf("month").format("DD/MM/YYYY")}
            </td>
          </tr>
          <tr>
            <td className="py-2.5">
              <label className="mr-5">Paiment le</label>
              {moment(date).format("DD/MM/YYYY")}
            </td>
            <td className="py-2.5">
              <label className="mr-5">Par</label>
              Virement
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const SalarialeSection = ({ employer, post }) => {
  return (
    <div className="border col-start-1 col-end-4 px-2 h-min">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="p-2.5">
              <label className="flex  gap-2">
                <span className=" font-medium">Name</span>
                <span className=" font-extralight">{employer.name}</span>
              </label>
            </td>
            <td className="p-2.5">
              <label className="flex  gap-2">
                {" "}
                <span className="font-medium">addess</span>
                <span className="font-extralight">{employer.address}</span>
              </label>
            </td>
            <td className="p-2.5">
              <label className="flex  gap-2">
                {" "}
                <span className=" font-medium">Cin</span>
                <span className=" font-extralight"> {employer.cin}</span>
              </label>
            </td>
          </tr>
          <tr>
            <td className="p-2.5">
              <label className="flex  gap-2">
                {" "}
                <span className=" font-medium">CNSS</span>
                <span className=" font-extralight">{employer.cnss}</span>
              </label>
            </td>
            <td className="p-2.5">
              <label className="flex  gap-2">
                {" "}
                <span className=" font-medium">Rib</span>
                <span className=" font-extralight">{employer.rib}</span>
              </label>
            </td>
            <td className="p-2.5">
              <label className="flex gap-2">
                {" "}
                <span className=" font-medium"> Sebut de contra : </span>
                <span className=" font-extralight">
                  {moment(employer.dateStart).format("DD/MM/YYYY")}
                </span>
              </label>
            </td>
          </tr>
          <tr>
            <td className="p-2.5">
              <label className="flex  gap-2">
                {" "}
                <span className=" font-medium"> Chef de famille : </span>
                <span className=" font-extralight">
                  {employer.familyStatus.status}
                </span>
              </label>
            </td>
            <td className="p-2.5">
              <label className="flex  gap-2">
                {" "}
                <span className=" font-medium"> Nbe enf</span>
                <span className=" font-extralight">
                  {employer.familyStatus.enfant.length}
                </span>
              </label>
            </td>
            <td className="p-2.5">
              <label className="flex  gap-2">
                {" "}
                <span className=" font-medium">Emploi</span>
                <span className=" font-extralight"> {post.label}</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const TableDetaie = ({ result }) => {
  return (
    <div className=" col-start-1 col-end-4 ">
      <table className="w-full table-fixed border-collapse border">
        <thead className="text-sm bg-gray-400">
          <tr className=" h-12">
            <th className="w-8 border">N</th>
            <th className="w-1/3 border">Designation</th>
            <th className="w-20 border">Nomber</th>
            <th className="w-20 border">Base</th>
            <th className="w-1/3 border">
              Part Salariale
              <table className="border-collapse  w-full">
                <thead>
                  <tr className="flex   pt-2">
                    <th className="w-1/3 ">Taux</th>
                    <th className=" w-1/3 border-x">Gain</th>
                    <th className=" w-1/3 ">Retune</th>
                  </tr>
                </thead>
              </table>
            </th>
            <th className="w-1/4 border">
              part patronale
              <table className="  w-full">
                <thead>
                  <tr className="flex pt-2">
                    <th className="w-1/2 border-r">Taux</th>
                    <th className=" w-1/2 ">Retune</th>
                  </tr>
                </thead>
              </table>
            </th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index} className={`${item.imported ? "imported text-center" : ""}`}>
              <td className="text-sm  border-x text-center">{index+1}</td>
              <td className="text-sm border-x">{item.designation}</td>
              <td className="text-sm border-x text-center">{item.nomber}</td>
              <td className="text-sm border-x text-center">{item.base}</td>
              <td className="text-sm border-x">
                <table className="  w-full">
                  <tbody>
                    <tr >
                      <td className="w-1/3 text-center">
                        {item.part_salaial.taux}
                      </td>
                      <td className=" w-1/3 border-x text-center">
                        {item.part_salaial.gain}
                      </td>
                      <td className=" w-1/3 text-center">
                        {item.part_salaial.retenue}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="  text-sm ">
                <table className="  w-full">
                  <tbody>
                    <tr className="flex  ">
                      <td className="w-1/2 border-r text-center">
                        {item?.part_patronale?.taux}
                      </td>
                      <td className=" w-1/2 text-center">
                        {item?.part_patronale?.retenue}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const TablePaie = React.forwardRef(({ data }, ref) => {
  const { select, result } = data || {};
  const { etablissement, branche, date, employer, post } = select || {};
  const style =
    "table-paie grid m-2 p-2  grid-cols-[1fr,2fr]  h-min-max gap-2 overflow-hidden overflow-y-visible";
  return (
    result && (
      <div ref={ref} className={style}>
        <EtablissementSection etablissement={etablissement} branche={branche} />
        <PeriodeSection date={date} />
        <SalarialeSection employer={employer} post={post} />
        <TableDetaie result={result} />
      </div>
    )
  );
});

export default TablePaie;
