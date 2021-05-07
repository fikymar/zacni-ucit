MATCH (teachingLevel:SchoolLevel {name: "SŠ"})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {name: "cizí jazyk"})<-[:QUALIFIES_FOR]-(qualification)
MATCH (achievedTitle:EducationTitle {name: "Bc."})<-[:DEFINED_BY]-(type:EducationType)
MATCH (achievedField:CollegeArea {name: "Učitelství"})<-[:DEFINED_BY]-(type)
MATCH (toStudy:EducationType)<-[:COMBINES]-(qualification)-[:COMBINES]->(type) WHERE toStudy <> type
RETURN toStudy


MATCH (teachingLevel:SchoolLevel {name: "SŠ"})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {name: "cizí jazyk"})<-[:QUALIFIES_FOR]-(qualification)
MATCH (achievedTitle:EducationTitle {name: "Mgr."})<-[:DEFINED_BY]-(type:EducationType)
MATCH (achievedField:CollegeArea {name: "Stavebnictví"})<-[:DEFINED_BY]-(type)
MATCH (toStudy:EducationType)<-[:COMBINES]-(qualification)-[:COMBINES]->(type) WHERE toStudy <> type
RETURN toStudy