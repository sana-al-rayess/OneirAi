import React, { useState, useEffect } from "react";
import SideNav from "../../components/SideNav";
import "./userdashboard.css";
import UserDash from "../../components/UserDash";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import DreamModal from "../../components/DreamModal";
import ErrorPage from "../../components/ErrorPage";
import DreamVisual from "../../components/DreamVisual";

const UserDashboard = () => {
  const token = localStorage.getItem("token");

  const [dreams, setDreams] = useState([]);
  const [selectedDream, setSelectedDream] = useState(null);
  const [dreamVisualizeOpen, setDreamVisualizeOpen] = useState(false);
  const [dreamModalOpen, setDreamModalOpen] = useState(false);

  const handleOpenDreamVisualize = (dream) => {
    setSelectedDream(dream);
    setDreamVisualizeOpen(true);
  };

  const handleCloseDreamVisualize = () => {
    setDreamVisualizeOpen(false);
  };

  const handleInterpretDream = (dream) => {
    setSelectedDream(dream);
    setDreamModalOpen(true);
  };

  const handleOpenDreamModal = (dream) => {
    setSelectedDream(dream);
    setDreamModalOpen(true);
  };

  const handleCloseDreamModal = () => {
    setSelectedDream(null);
    setDreamModalOpen(false);
  };


  useEffect(() => {
    const getDreams = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getDreams", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setDreams(response.data.data);

      } catch (error) {
        console.log(error);
      }
    };

    if (dreams.length === 0) {
      getDreams();
    }

  }, [dreams]);

  const handleDeleteDream = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/deleteDream/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(response => {
        if (response.data.status === 'success') {
          const updatedDreams = dreams.filter(dream => dream.id !== id);
          setDreams(updatedDreams);
          console.log("Dream deleted successfully!")

        }
      })
      .catch(error => {
        console.log(error);
        console.log("Error deleting..")
      });
  }


  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(inputValue);
    const delay = 500;
    let timeoutId;

    const searchDreamsByTitle = async () => {
      const url = `http://127.0.0.1:8000/api/searchByTitle?${new URLSearchParams({
        q: inputValue,
      })}`;
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = response.data;
      console.log(data);
      setDreams(data.dreams);
    };

    const debounceSearch = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(searchDreamsByTitle, delay);
    };

    debounceSearch();

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const sortDreamsByDate = async (sortOrder) => {
    const url = `http://127.0.0.1:8000/api/sortByDate/${sortOrder}`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = response.data;
    console.log(data);
    setDreams(data.dreams);
  };

  const handleDownloadDream = (id) => {
    const token = localStorage.getItem('token');
  
    fetch(`http://127.0.0.1:8000/api/download/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.text())
      .then((data) => {
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `dream.txt`;
        link.click();
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <div className="body2">
      {token ? (
        <div className="box">
          <div className="side-nav">
            <SideNav />
          </div>
          <div className="page-left">
            <UserDash />

            <div className="dreams-container">
              <div className="search-container">
                <div className="search-div">
                  <input
                    type="text"
                    placeholder="Search for dreams..."
                    value={inputValue}
                    onChange={handleInputChange}
                  />

                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="arrow-icons"
                    onClick={() => sortDreamsByDate("recent")}
                  />
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="arrow-icons"
                    onClick={() => sortDreamsByDate("oldest")}
                  />
                </div>
              </div>

              {dreams.map((dream) => (
                <div className="dream-card" key={dream.id}>
                  <i className="fas fa-times delete-icon" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this dream?")) {handleDeleteDream(dream.id);}
                  }}></i>
                  <div className="dream-details">
                    <h3>{dream.title}
                      <i className="fas fa-edit"></i>

                    </h3>
                    <p2>{dream.date}</p2>
                    <br />
                    <br />
                    <p1>{dream.description}</p1>
                    
                    <div className="interpret-label">Interpretation:</div>
                    <div className="interpret-dream">{dream.interpretation}</div>



                  </div>
                  <div className="dream-card-button">
                    <div>
                      <button className="button-dream" onClick={() => handleOpenDreamVisualize(dream)}>
                        Visualize
                      </button>
                    </div>
                    <div>
                      <button className="button-dream"
                        onClick={() => handleOpenDreamModal(dream)}>
                        Interpret
                      </button>
                      <div className="dream-card-icons">

                      </div>
                    </div>
                    <div>
                      <button className="button-dream" onClick={() => handleDownloadDream(dream.id)}>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
      {selectedDream && (
        <>
          {dreamVisualizeOpen && (
            <DreamVisual
              dream={selectedDream}
              onClose={handleCloseDreamVisualize}
            />
          )}
          {!dreamVisualizeOpen && (
            <DreamModal
              dream={selectedDream}
              onClose={handleCloseDreamModal}
            />
          )}
        </>
      )}
    </div>
  );
}

export default UserDashboard;