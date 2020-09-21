class ReviewItem extends HTMLElement {
    set review(review) {
        this._review = review;
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <img class="review-img" src="${this._review.img}">
            <div class="review-info">
                <h2>${this._review.name}</h2>
                <p>${this._review.text}</p>
            </div>`;
    }
 }
  
 customElements.define("review-item", ReviewItem);