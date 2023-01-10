import React, { useContext, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Result from "./Result";

const Task = () => {
  const inpData = {
    1: {
      id: 1,
      image0:
        "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
      image1:
        "https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg",
      image2:
        "https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg",
      image3:
        "https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg",
      image4:
        "https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg",
      image5:
        "https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg",
      image6:
        "https://en.testometrika.com/upload/answers/75b/75b18f06da1aeff34f41634dcb126b57.svg",
      correctAnswer: 2,
    },
    2: {
      id: 2,
      image0:
        "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
      image1:
        "https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg",
      image2:
        "https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg",
      image3:
        "https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg",
      image4:
        "https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg",
      image5:
        "https://en.testometrika.com/upload/answers/282/2829b67f1ddb1c64a70b4ac754fc03c9.svg",
      image6:
        "https://en.testometrika.com/upload/answers/d63/d635d6a11058a01b5b6760b6638342fa.svg",
      correctAnswer: 4,
    },
    3: {
      id: 3,
      image0:
        "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
      image1:
        "https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg",
      image2:
        "https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg",
      image3:
        "https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg",
      image4:
        "https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg",
      image5:
        "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg",
      image6:
        "https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg",
      correctAnswer: 5,
    },
    4: {
      id: 4,
      image0:
        "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
      image1:
        "https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg",
      image2:
        "https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg",
      image3:
        "https://en.testometrika.com/upload/answers/5ef/5ef20f3121c4d9e38517522535eb298c.svg",
      image4:
        "https://en.testometrika.com/upload/answers/376/3763c71fffa9648c4aa1f1c53aa06bce.svg",
      image5:
        "https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg",
      image6:
        "https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg",
      correctAnswer: 6,
    },
    5: {
      id: 5,
      image0:
        "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
      image1:
        "https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg",
      image2:
        "https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg",
      image3:
        "https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg",
      image4:
        "https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg",
      image5:
        "https://en.testometrika.com/upload/answers/4f9/4f98b73c7fa56a9753c4f3d68b697fe1.svg",
      image6:
        "https://en.testometrika.com/upload/answers/468/468e4cededf71527edda5d3253dd5a9b.svg",
      correctAnswer: 4,
    },
    6: {
      id: 6,
      image0:
        "https://en.testometrika.com/upload/questions/a81/a81ad1de8cfdbb5d180ea3fd50a3bacc.svg",
      image1:
        "https://en.testometrika.com/upload/answers/99f/99f5c77985a1b200e9141fdd2ccf7b2d.svg",
      image2:
        "https://en.testometrika.com/upload/answers/071/0713aa121f002ad9bc4ae153eeb8e39d.svg",
      image3:
        "https://en.testometrika.com/upload/answers/67d/67d393aef6640deb3010b31f3b9cc95f.svg",
      image4:
        "https://en.testometrika.com/upload/answers/be5/be506b556903eb28735313c3f34c3e34.svg",
      image5:
        "https://en.testometrika.com/upload/answers/fea/feae0c9007450070ab504d2a9d250d5d.svg",
      image6:
        "https://en.testometrika.com/upload/answers/60d/60d396000687765f149079a2effb9e82.svg",
      correctAnswer: 5,
    },
  };
  // const [count1,setCount1] = useContext(AppContex)
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [answerInput, setAnswerInput] = useState(null);
  const [quesCount, setQuesCount] = useState(1);
  let data = inpData[quesCount];

  const handleCount = (ans) => {
    data = inpData[quesCount];
    if (data.correctAnswer == ans) {
      setCorrectAnsCount((prev) => prev + 1);
      if (quesCount <= 5) {
        setQuesCount(quesCount + 1);
      } else if ((quesCount = 6)) {
        setQuesCount(0);
      }
    }
    if (quesCount <= 5) {
      setQuesCount(quesCount + 1);
    } else if ((quesCount = 6)) {
      setQuesCount(0);
    }

    // console.log("--------------------------------");
    // console.log("data.correctAnswer", data.correctAnswer);
    // console.log("ans", ans);
    // console.log("quesCount", quesCount);
    // console.log("answerInp",answerInput)
  };
  // console.log("correctAnsCount", correctAnsCount);
  // console.log("quesCount", quesCount);

  return (
    <Box>
      {quesCount <= 5 && quesCount != 0 ? (
        <Box bg="#6b6fbc" p="2rem" h="100vh">
          <Flex
            fontWeight="500"
            fontSize="2.5rem"
            justifyContent="start"
            color="#4b4d83"
          >
            {quesCount}
            <span style={{ color: "#fefeff" }}>/5</span>
          </Flex>
          <Box>
            <Flex justifyContent="center">
              <img src={data && data.image0} alt="first" width={"600px"} />
            </Flex>
            <Box>
              <Text color="white" fontSize="2.5rem">
                <span>{quesCount + ". "}</span>
                Which shape should be in the rightmost cell with a
              </Text>
              <Text color="white" fontSize="2.5rem">
                question mark?
              </Text>
            </Box>
            <Flex gap="1rem" justifyContent="center" mt="1rem">
              <img
                src={data && data.image1}
                alt="1img"
                width="10.5%"
                onClick={() => {
                  setAnswerInput(1);
                  handleCount(1);
                }}
              />
              <img
                src={data && data.image2}
                alt="2img"
                width="10.5%"
                onClick={() => {
                  setAnswerInput(2);
                  handleCount(2);
                }}
              />
              <img
                src={data && data.image3}
                alt="3img"
                width="10.5%"
                onClick={() => {
                  setAnswerInput(3);
                  handleCount(3);
                }}
              />
              <img
                src={data && data.image4}
                alt="4img"
                width="10.5%"
                onClick={() => {
                  setAnswerInput(4);
                  handleCount(4);
                }}
              />
              <img
                src={data && data.image5}
                alt="5img"
                width="10.5%"
                onClick={() => {
                  setAnswerInput(5);
                  handleCount(5);
                }}
              />
              <img
                src={data && data.image6}
                alt="6img"
                width="10.5%"
                onClick={() => {
                  setAnswerInput(6);
                  handleCount(6);
                }}
              />
            </Flex>
          </Box>
        </Box>
      ) : quesCount >= 6 ? (
        <Result correctAnsCount={correctAnsCount} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default Task;
