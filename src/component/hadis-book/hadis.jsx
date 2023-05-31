import React from "react";
import "./hadis.css";
const Hadis = () => {
  return (
    <div>
      <h1>Words of Wisdom: Exploring the Hadiths</h1>
      <div className="hadis-contaniner1">
        <div className="hadis-wrap1">
          <div className="hadis-img-contanier">
            <img className="hadis-img1" src="/img/bhukakri.png" alt="" />
          </div>
          <div className="hadis-text-contanier">
            <p>
              Sahih al-Bukhari is one of the most revered and widely studied
              collections of Hadith in the Islamic world. Compiled by Imam
              Muhammad al-Bukhari, it consists of over 7,000 authentic
              narrations from the Prophet Muhammad (peace be upon him).
            </p>
          </div>
        </div>
        <div className="hadis-wrap1">
          <div className="hadis-img-contanier">
            <img className="hadis-img2" src="/img/muslim.png" alt="" />
          </div>
          <div className="hadis-text-contanier">
            <p>
              Sahih Muslim ishighly respected and influential compilation of
              Hadith in Islam, second only to Sahih al-Bukhari. It was authored
              by Imam Muslim ibn al-Hajjaj, who meticulously selected and
              organized over 7,000 authentic Hadiths from various sources.
            </p>
          </div>
        </div>
      </div>

      <div className="hadis-contaniner1">
        <div className="hadis-wrap1">
          <div className="hadis-img-contanier">
            <img className="hadis-img1" src="/img/trimizi.png" alt="" />
          </div>
          <div className="hadis-text-contanier">
            <p>
              "Sunan At-Tirmidhi" is a renowned collection of hadith compiled by
              Imam Abu 'Isa Muhammad ibn 'Isa At-Tirmidhi. This book contains a
              compilation of authentic sayings, actions, and approvals of the
              Prophet Muhammad (peace be upon him) and his companions. Sunan
              At-Tirmidhi covers various aspects of Islamic life, including
              faith, worship, ethics, and social interactions.
            </p>
          </div>
        </div>
        <div className="hadis-wrap1">
          <div className="hadis-img-contanier">
            <img className="hadis-img2" src="/img/dawood.png" alt="" />
          </div>
          <div className="hadis-text-contanier">
            <p>
              "Sunan Abi Dawood" is a comprehensive book of hadith compiled by
              Imam Abu Dawood Sulaiman bin Ash'ath Al-Sijistani. It consists of
              thousands of traditions narrated by the Prophet Muhammad (peace be
              upon him) and his companions. The book covers a wide range of
              topics including faith, worship, ethics, jurisprudence, and social
              interactions.
            </p>
          </div>
        </div>
      </div>
      <div className="hadis-contaniner1">
        <div className="hadis-wrap1">
          <div className="hadis-img-contanier">
            <img className="hadis-img1" src="/img/maja.png" alt="" />
          </div>
          <div className="hadis-text-contanier">
            <p>
            Sunan Ibn Majah is Compiled by Abu Abdullah Muhammad ibn Yazid Ibn Majah al-Qazwini, it is considered a valuable source of Prophetic traditions. The book contains over 4,000 Hadiths categorized into chapters,to study and analyze the sayings and actions of the Prophet Muhammad (peace be upon him)
            </p>
          </div>
        </div>
        <div className="hadis-wrap1">
          <div className="hadis-img-contanier">
            <img className="hadis-img2" src="/img/nisai.png" alt="" />
          </div>
          <div className="hadis-text-contanier">
            <p>
            Sunan Nisai is Compiled by Imam Ahmad ibn Shu'ayb al-Nisai, it is widely regarded as a reliable source of Prophetic traditions. The book contains thousands of Hadiths organized into chapters,to gain a deeper understanding of the teachings and practices of the Prophet Muhammad (peace be upon him).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hadis;
