import "./styles/style.css";
import loadAll from "./scripts/displayAll.js";

loadAll();

const pageBtn = document.querySelectorAll(".page-btn");

pageBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        pageBtn.forEach(btn => {
        btn.classList?.remove('selected')  
      })
        btn.classList.add('selected')

        const btnID = btn.id
        switch (btnID) {
            case 'all-btn':
                loadAll()
                break
            
            case 'today-btn':

                break
            
            case 'impor-btn':

                break
            
            case 'comply-btn':
                break
        }
  });
});
