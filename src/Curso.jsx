import React from "react";
import PropTypes from 'prop-types'

const Curso = ({title,price}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK28YdMrFb7PxezB-WQkZ80Ck5Lio3FywpGQ&usqp=CAU" alt="poster" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            {title}
          </h3>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{ `$ ${price}`}</a>
          </div>
        </div>
      </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string
}

Curso.defaultProps = {
  title: 'No hay titulo',
  price: '--'
}

export default Curso;