import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";

function Success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Thanks! Order confirmed.</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            commodi fuga dolorum minus vel ducimus porro provident voluptate
            earum, asperiores odio, iure amet corporis consequuntur quisquam
            nemo similique dolor unde!
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-6"
          >
            Go to Orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
