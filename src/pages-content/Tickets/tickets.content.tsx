import { TicketsContainer } from "./tickets.style";
// import TextTruncate from "react-text-truncate";
// import { useSpaces } from "@Hooks/useSpace";
// import Cart from "./Space-Cart";

const TicketsContent = () => {
  const data = [
    {
      id: 1,
      code: "#202",
      title: "How to deploy one of spaces to Asian servers???",
      status: "closed",
      lastUpdate: "yesterday",
    },
    {
      id: 2,
      code: "#202",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, commodi accusantium harum vitae officiis laudantium vel tempora eius ",
      status: "closed",
      lastUpdate: "yesterday",
    },
    {
      id: 3,
      code: "#176",
      title: "I need some help to make my first content type",
      status: "open",
      lastUpdate: "last week",
    },
    {
      id: 4,
      code: "#340",
      title: "How to extend my credit? it goes wrong once apply money",
      status: "closed",
      lastUpdate: "3 days ago",
    },
  ];
  return (
    <TicketsContainer>
      <div className="overflow-x-auto flex-1 p-4">
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
                Title
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
                Last Update
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
                <td className="px-4 py-4">{t.title}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    {t.status === "closed" ? (
                      <div className="h-3 w-3 bg-orange-500 mx-2"></div>
                    ) : (
                      <div className="h-3 w-3 bg-green-500 mx-2"></div>
                    )}
                    {t.status}
                  </div>
                </td>

                <td className="px-4 py-4">{t.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </TicketsContainer>
  );
};
export default TicketsContent;
