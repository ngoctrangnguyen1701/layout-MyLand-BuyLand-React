import React from 'react';
import { MyLandDetailContext } from 'src/contexts/MyLandDetailContext';

const ChangeHeroModal = () => {
  const showModalChangeHero = React.useContext(MyLandDetailContext).state.showModalChangeHero
  const dispatch = React.useContext(MyLandDetailContext).dispatch

  return (
    <section
      className="modal-change-hero"
      onClick={()=>dispatch({type: 'EXIT_MODAL_CHANGE_HERO'})}
    >
      <div className="modal-change-hero-frame">
        <div
          className="modal-change-hero-box"
          onClick={e=>{e.stopPropagation()}}
        >
          <div className="modal-change-hero-header">CHANGE HERO</div>
          <div className="modal-change-hero-content">
            <div className="row">
              <div className="col-4 d-flex">
                <div className="modal-change-hero-hero my-4">
                  <div className="modal-change-hero-hero-img"></div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Rarity:
                      <span>1</span>
                    </p>
                  </div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Minning:
                      <span>50</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 d-flex">
                <div className="modal-change-hero-hero my-4">
                  <div className="modal-change-hero-hero-img"></div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Rarity:
                      <span>1</span>
                    </p>
                  </div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Minning:
                      <span>50</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 d-flex">
                <div className="modal-change-hero-hero my-4">
                  <div className="modal-change-hero-hero-img"></div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Rarity:
                      <span>1</span>
                    </p>
                  </div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Minning:
                      <span>50</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 d-flex">
                <div className="modal-change-hero-hero my-4">
                  <div className="modal-change-hero-hero-img"></div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Rarity:
                      <span>1</span>
                    </p>
                  </div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Minning:
                      <span>50</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 d-flex">
                <div className="modal-change-hero-hero my-4">
                  <div className="modal-change-hero-hero-img"></div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Rarity:
                      <span>1</span>
                    </p>
                  </div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Minning:
                      <span>50</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 d-flex">
                <div className="modal-change-hero-hero my-4">
                  <div className="modal-change-hero-hero-img"></div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Rarity:
                      <span>1</span>
                    </p>
                  </div>
                  <div className="modal-change-hero-hero-text">
                    <p>
                      Minning:
                      <span>50</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <button 
              className="btn-apply"
              onClick={()=>dispatch({type: 'EXIT_MODAL_CHANGE_HERO'})}
            >APPLY</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ChangeHeroModal);