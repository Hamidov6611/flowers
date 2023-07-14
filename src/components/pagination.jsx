import { Pagination } from "@mui/material";
import React from "react";

const Pagination1 = ({pageSize, setPageId}) => {
  return (
    <div>
      <Pagination
       count={Math.floor(pageSize / 10) + 1}
       onChange={(e, value) => setPageId(value)}
       variant="outlined"
       color="primary"
        />
    </div>
  );
};

export default Pagination1;
