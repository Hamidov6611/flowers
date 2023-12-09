import { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 font-roboto text-white">
      <img src={"page_not_found.png"} alt="img" className="w-80" />
      <Link
        to={"/"}
        className="rounded-md bg-sky-500 px-6 py-2 hover:bg-sky-600"
      >
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
