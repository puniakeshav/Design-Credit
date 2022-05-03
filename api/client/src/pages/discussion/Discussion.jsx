import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Comments from "../../components/comments/Comments";
import Sidebar from "../../components/sidebar/Sidebar";
import "./discussion.css";
import axios from "axios";
import { useLocation } from "react-router";
import WriteComment from "../../components/writeComment/WriteComment";

export default function Home() {
  const [comments, setComments] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get("/comments" + search);
      setComments(res.data);
      console.log(res.data);
    };
    fetchComments();
  }, [search]);
  return (
    <>



      <div className="discussion">
        <div className="">
          <div>
            <h1 className="discussion-heading">Lets Talk About Ayurveda</h1>
            <br></br>

            <h1>Is Ayurved used in villages now?</h1>
            <p>We visited the nearby village of Phalodi for our research. Phalodi is a small village in the Jodhpur District, with the majority of its population practicing agriculture and related activities. Many villagers have their children living in the main city for their education.</p>
            {/* <br></br> */}

            <p>The people welcomed us warmly and were open to answer our questions. As opposed to our expectations, the villagers reported no significant use of any Indigenous plants for medical treatments. There was only mention of modern day treatment of even small infections and flus. Even the village elders were clear about the use of allopathic medicines and tablets for their illnesses. They stated that whenever they fall sick, their first choice is always the nearby hospital, and no local plant based medicinal practices are involved.</p>
            <p>This observation needs to be highlighted, since it is a common thought that villages always incorporate local plants in their medicinal treatments, but this is not always true.
              We feel that the knowledge available with the professionals in the field might not have reached the grassroot level in all areas, since contrary to beliefs, villagers were not well versed with indigenous practices. They did not cultivate any plant for medicinal purposes, and were also unaware of the medicinal properties of plants already growing with their crops.</p>
            <p>The villagers also offered afeem, which is common for them to consume and use
              It was also found that the ayurvedic clinic that existed in the village closed down, and since then the people only visited allopathic doctors. Some of them expressed that they would appreciate an ayurvedic doctor since they would like an alternative treatment too.
              We can see that there hasn’t been a proper channel for the villagers to learn about these medicinal plants. The information prevalent in the institutes hasn’t reached the local level in some villages.</p>
            <br></br>
            <br></br>

            <h1>Practitioners and their say on Ayurved in Jodhpur</h1>
            <p>Talking to someone who spends his days right in the center of the field is a quintessential part of any research work. We spoke to Mr. Narayan Ram ji who is an established Ayurvedic Practitioner in the Jodhpur City. Following are the answers we gathered to our questionnaire, highlighting the most relevant points of the discussion.</p>
            <br></br>
            <p>What are some commonly used native species of plants in the district?</p>
            <p>Ans: aloevera, neem, ker-sangri, Aak (rub its paste on foot to cure diabetes), kejri: used during menstruation.</p>
            <br></br>
            <p>Health conditions where ayurvedic medicine is preferred over allopathy?</p>
            <p>Ans: For curing cancer, even stage 3 or 4, ayurveda has proven to be better than allopathy. Ayurveda may take some time, but cures the root cause of the illness.
              Eg: Cured diabetes of a 12 year old boy, which allopathy could not.</p>
            <br></br>
            <p>How many locally grown medicines do you prescribe?</p>
            <p>Ans: I am a part of a program wherein I promote Ayurveda in the country. Mainly my medicines are exported from Himachal (Shimla). Speaking of locally grown plants, Neem and Ayurveda are at the top. People also worship and use the Khejri tree for a lot of purposes.</p>
            <br></br>
            <p>Any special medicine made in the region/exported from here? Any endangered species/ special variety found here?</p>
            <p>Ans: Aloe Vera is of high use here. It is found in abundance and exploited for a lot of medicinal uses.
              <br></br>Exports:
              <br></br>
              Ram and Shyam Tulsi juice is packed and exported
              <br></br>
              Bel (Amar bel) : Its leaves are packed and exported. They are boiled and used to cure diseases like liver disorder, gastrointestinal infections etc.
              <br></br>
              Shankhpushpi: Good for the brain
              <br></br>
              Aak
              Chhimiya: root juice
              <br></br>
              Neem flowers juice
              <br></br>
              Kejri: leaves, wood
              <br></br>
              Ker: wood : it is not infected by insects
              <br></br>
              Sonamakki: leaves are boiled and used; their paste is also used. It is grown a lot near Osian.
              <br></br>
              Plants are imported from Shimla, and also other parts of Rajasthan.
            </p>
            <br></br>
            <p>Number of people depending on ayurveda has increased/decreased in the past few years?
              Ans: After Covid, the number has increased quite a lot. Speaking statistically, from 2%, the number has gone up to 20%
            </p>
            <br></br>
            <p>What is the ratio of locally made and industry manufactured medicines
              Ans: Locally made medicines are very less, more dependency is on the industry manufactured medicines.
              Where do you collect the raw materials for medicines in this district?
              Ans: For raw materials in Jodhpur, ghantaghar has few shops
            </p>
            <br></br>
            <p>Like allopathy, does ayurvedic treatment also prescribe supplements (eg: vitamin deficiency medicines) ?
              Ans: Different types of kaadhas. Tulsi ark. Root and fruit extracts/juices.
            </p>
            <br></br>
            <p>What is the local knowledge among people, that maybe they take some plant medicines without doctor consultation?
              Ans: Not medicines, but they are aware of several home remedies. Eg: Khejri bark is available in the market, which is used by the ladies during menstruation. Haldi is used in food as well as an antiseptic. Ashwagandha tablets/powders are taken to relieve stress and get relief from inflammation.
            </p>
            <br></br>
            <p>Any government policies for protecting endangered species of plants, or for promoting ayurveda?
              Ans: The Ayush Vibhag has launched several policies for promoting ayurved in the country.
            </p>
            <br></br>
            <p>Do women also participate professionally in the field?
              Ans: Women are also present in the field, and in households, women are more aware of home remedies. Even I wasn’t supported openly by my family when I chose this field.
            </p>
            <br></br>
            <p>Any plant whose medicine are used to cure the entire human body (all kinds of diseases)
              Ans: Bel is also known as shrifal. All of its parts are used to cure one or the other kind of disease.
            </p>
            <br></br>
            <p>Are there plants which are not only used in medicine but also in food (cooked/ eaten raw) (for their medicinal values)
              Ans: Ker-sangri is a popular rajasthani dish. Ker and sangri both have medicinal values and are also  used in the kitchen.
            </p>
            <br></br>
            <br></br>

            <h1>Views from experts in the field</h1>
            <p>A significant contribution to our research work comes from the information that we gathered on our field visit to the Ayurveda University (Jodhpur Dist). The university had a variety of plants and trees in their herbal garden, many of which were native species.
              <br></br>
              We gathered information pertaining to the medicinal plants, their usage and applications. Various pictures used in the documentation have been clicked in their herbal garden.
              <br></br>
              The faculties were extremely helpful and took us around in their herbal garden. We received a lot of information pertaining to our research work, thanks to their help and guidance. The institute has expert faculties in a wide range of ayurvedic fields.
              <br></br>
              The knowledge base of the professionals is so large that a single visit could not sum up all of it. In fact, indigenous usages of several plants. remain confined to these institutes, since the local public is not aware of these We would like to pressurize this point, that there is a need for a proper channel for this information to reach the ground levels.
            </p>

            <br></br>
            <br></br>
            <h1>The Ayush Vibhag</h1>
            <p>The Ministry of Ayush, a department of the Government of India, is in charge of establishing indigenous and alternative medical systems in India via teaching, research, and distribution.
              <br></br>
              The ministry operates a number of healthcare initiatives, the most of which are directed at the rural people.
              Ayush is meant to constitute the backbone of the Ayushman Bharat Yojana, and the ministry has long attempted to integrate the many Ayush systems with contemporary medicine, in what has been called as "cross-pathy."
              <br></br>
              When Covid-19 cases started increasing in India, the Ayush Vibhag promoted the use of indigenous practices and Ayurvedic preventive measures against the virus. It had been observed by practitioners that the percentage of people shifting towards ayurveda has increased in the pandemic.
            </p>
            <br></br><br></br>
            <h1>Are Ayurveda and Indigenous Medicinal Practices the same?</h1>
            <p>Through our field work and literature reviews, we have developed an understanding that the medicinal use of Indigenous plants is not the same as Ayurvedic practices. It is true that ayurveda derives its uses from plants and their derivatives, but not all local medicinal practices can be called ‘Ayurvedic’.
              <br></br>
              In ayurveda, proper research and medicine production is done, with the help of professionals. In Indigenous medicine, a simple home remedy is also included, wherein a person can use any locally grown plant for medicinal purposes.
              <br></br>
              This discussion is open to all, since we do not make strong claims on these differences. These are conclusions that we have made from our observations.<br></br>
              Do you feel that ayurveda and indigenous medicines are one and the same? The comment section is open for discussions!
            </p>
            <br></br><br></br><br></br>
            <h1>Comments</h1>
          </div>
          <Comments comments={comments} />
        </div>

        <Sidebar />
      </div>
      <WriteComment />
    </>
  );
}
