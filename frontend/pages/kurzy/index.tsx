import React from 'react';
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { ALL_COLLEGES_QUERY } from '../../graphQL/queries/colleges.queries';


const Welcome = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.white};
`;
const CollegeCard = styled.div`
  padding:16;
  width:30%;
  height:200;
`
const CollegeTitle = styled.h5``


const Courses = () => {
  const { loading, error, data } = useQuery(ALL_COLLEGES_QUERY);
  console.log(data)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Welcome>Seznam vysokých škol.</Welcome>
      {data.colleges.map(college=>
        <CollegeCard>
          <CollegeTitle>{college.name}</CollegeTitle>
        </CollegeCard>
      )}
    </>
  );
};
export default Courses;
