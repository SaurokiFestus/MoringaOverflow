import styled from "styled-components";

function Error({ errors }) {
  // console.log(errors);
  const errormessage = errors?.map((error) => {
    return (
      <>
        <li className="text-danger list-unstyled px-1">{error}</li>
      </>
    );
  });
  return <>{errormessage}</>;
}

export default Error;

// const Container = styled.div`
//   color: red;
//   display: flex;
//   padding: 8px;
//   align-items: center;
//   gap: 8px;
// `;

// const Message = styled.p`
//   margin: 0;
// `;
