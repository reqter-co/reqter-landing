import { Wrapper, Sum, List } from "./payments.style";
// import Item from "./payments.item";
const BillingPayments = () => {
  const data = [
    {
      id: 1,
      code: "#202",
      issueDate: "2 weeks ago",
      status: "Failed",
      price: "1500$",
    },
    {
      id: 2,
      code: "#202",
      issueDate: "Last month",
      status: "Success",
      price: "700$",
    },
    {
      id: 3,
      code: "#202",
      issueDate: "yesterday",
      status: "Success",
      price: "2850$",
    },
    {
      id: 4,
      code: "#202",
      issueDate: "3 month ago",
      status: "Success",
      price: "1500$",
    },
  ];
  return (
    <Wrapper>
      <Sum>
        Total Paid :<span className="font-semibold px-2">2,500$</span>
      </Sum>
      <List>
        <div className="overflow-x-auto flex-1">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr
                className="rounded-lg text-sm font-medium text-gray-700 text-left"
                style={{ fontSize: "0.9674rem" }}
              >
                <th
                  className="px-4 py-2 bg-gray-200"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  #
                </th>
                <th
                  className="px-4 py-2 bg-gray-200 w-1/2"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  Issue Date
                </th>
                <th
                  className="px-4 py-2 w-1/4"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  Status
                </th>
                <th
                  className="px-4 py-2 w-1/4"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {data?.map((t) => (
                <tr
                  key={t.id}
                  className="hover:bg-gray-100 border-b border-gray-200 py-10 cursor-pointer"
                >
                  <td className="px-4 py-4">{t.code}</td>
                  <td className="px-4 py-4">{t.issueDate}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      {t.status.toLowerCase() === "failed" ? (
                        <div className="h-3 w-3 bg-red-500 mx-2"></div>
                      ) : (
                        <div className="h-3 w-3 bg-green-500 mx-2"></div>
                      )}
                      {t.status}
                    </div>
                  </td>

                  <td className="px-4 py-4">{t.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* {data?.map((x, index) => (
          <Item key={index} data={x} />
        ))} */}
      </List>
    </Wrapper>
  );
};
export default BillingPayments;
