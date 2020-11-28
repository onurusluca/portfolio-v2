<template>
  <div id="works">
    <h2>
      {{ $t("myworks") }}
      <hr />
    </h2>
    <div class="projects">
      <div class="project left" data-aos="fade-in">
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://denmou.herokuapp.com/"
          >
            <img
              src="../assets/images/denmou.png"
              alt="Denmou image"
              class="showcase"
            />
          </a>
        </div>
        <div class="texts">
          <h3 class="title">Denmou</h3>
          <p class="text">
            {{ $t("p-detail") }}
          </p>
          <div class="tags">
            <p>HTML</p>
            <p>CSS&SCSS</p>
            <p>JavaScript</p>
            <p>Vue.js/Nuxt.js</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/denmou-company"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://denmou-company.vercel.app/"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                width="511.626px"
                height="511.627px"
                viewBox="0 0 511.626 511.627"
                style="enable-background: new 0 0 511.626 511.627"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361
			c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414
			c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418
			h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563
			c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542
			c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13
			c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57
			C397.709,293.209,395.519,292.354,392.857,292.354z"
                    />
                    <path
                      d="M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424
			c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067
			c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852
			s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426
			c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="project right" data-aos="fade-in">
        <div class="texts">
          <h3 class="title">KaidanFit</h3>
          <p class="text">
            {{ $t("p-detail2") }}
          </p>
          <div class="tags">
            <p>HTML</p>
            <p>CSS&SCSS</p>
            <p>JavaScript</p>
            <p>JQuery</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/kaidanfit"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://kaidanfit.netlify.app/"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                width="511.626px"
                height="511.627px"
                viewBox="0 0 511.626 511.627"
                style="enable-background: new 0 0 511.626 511.627"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361
			c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414
			c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418
			h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563
			c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542
			c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13
			c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57
			C397.709,293.209,395.519,292.354,392.857,292.354z"
                    />
                    <path
                      d="M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424
			c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067
			c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852
			s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426
			c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
        </div>
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://kaidanfit.netlify.app/"
          >
            <img
              src="../assets/images/kaidan.png"
              alt="KaidanFit image"
              class="showcase"
            />
          </a>
        </div>
      </div>

      <div class="project left" data-aos="fade-in">
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://egaki.netlify.app/"
          >
            <img
              src="../assets/images/egaki.png"
              alt="Denmou image"
              class="showcase"
            />
          </a>
        </div>
        <div class="texts">
          <h3 class="title">Egaki</h3>
          <p class="text">
            {{ $t("p-detail3") }}
          </p>
          <div class="tags">
            <p>Canvas</p>
            <p>Draw</p>
            <p>JavaScript</p>
            <p>Touch Inputs</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/egaki"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://egaki.netlify.app/"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                width="511.626px"
                height="511.627px"
                viewBox="0 0 511.626 511.627"
                style="enable-background: new 0 0 511.626 511.627"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361
			c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414
			c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418
			h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563
			c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542
			c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13
			c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57
			C397.709,293.209,395.519,292.354,392.857,292.354z"
                    />
                    <path
                      d="M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424
			c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067
			c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852
			s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426
			c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="project right" data-aos="fade-in">
        <div class="texts">
          <h3 class="title">FotoShare</h3>
          <p class="text">
            {{ $t("p-detail4") }}
          </p>
          <div class="tags">
            <p>Firebase</p>
            <p>JavaScript</p>
            <p>URL Shortening</p>
            <p>Image Sharing</p>
          </div>
          <div class="links">
            <a
              title="Show the code on github"
              target="_blank"
              rel="”noreferrer”"
              href="https://github.com/onurusluca/fotoshare"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
            <a
              title="Show the live website"
              target="_blank"
              rel="”noreferrer”"
              href="https://fotoshare.netlify.app/"
              ><svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#f1f1f1"
                width="511.626px"
                height="511.627px"
                viewBox="0 0 511.626 511.627"
                style="enable-background: new 0 0 511.626 511.627"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361
			c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414
			c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418
			h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563
			c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542
			c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13
			c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57
			C397.709,293.209,395.519,292.354,392.857,292.354z"
                    />
                    <path
                      d="M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424
			c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067
			c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852
			s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426
			c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
        </div>
        <div class="image-container">
          <a
            target="_blank"
            rel="”noreferrer”"
            href="https://fotoshare.netlify.app/"
          >
            <img
              src="../assets/images/upload.png"
              alt="KaidanFit image"
              class="showcase"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<i18n>
{
  "en": {
    "myworks": "My Works",
    "p-detail": "A fictional Japanese SaaS company website offering services like website making, digital marketing, social media managing etc... Made with Nuxt.js",
    "p-detail2": "A fitness and diet program website with an innovative mobile exclusive bottom menu. Made with traditional technologies.",
    "p-detail3": "Drawing app made with canvas. User can draw on the canvas, erase, change color and brush size, add picture and download the canvas.",
    "p-detail4": "Image sharing website. It saves the image and give the user an URL. It also can short the URL for ease-of-use. Uses Firebase database."

  },
  "ja": {  
    "myworks": "実績",
    "p-detail": "ウェブサイト作成、デジタルマーケティング、ソーシャルメディア管理などのサービスを提供する架空の日本のSaaS会社のウェブサイト。 Nuxt.jsで作成しました。",
    "p-detail2": "革新的なモバイル専用ボトムメニューを備えたフィットネスおよびダイエットプログラムのウェブサイトです。 シンプルでユーザーフレンドリーになるように設計されています。 基本的な技術で作られています。",
    "p-detail3": "Canvasで作ったお絵かきアプリです。ユーザーはキャンバスに描画したり、色やブラシサイズの変更、画像の追加や消去、キャンバスのダウンロードなどをすることができます。",
    "p-detail4": " Firebaseデータベースを使用した画像共有サイトです。 画像を保存し、ユーザーにそのURLを提供します。 また、使いやすくするためにURLを短くすることもできます。"

},
    "tr": {  
    "myworks": "Çalışmalarım",
    "p-detail": "Web sitesi yapımı, dijital pazarlama, sosyal medya yönetimi gibi hizmetler sunan kurgusal bir Japon SaaS şirketi web sitesi ... Nuxt.js ile yapılmıştır",
    "p-detail2": "Yenilikçi bir mobil özel alt menüye sahip bir fitness ve diyet programı web sitesi. Basit ve kullanıcı dostu olacak şekilde tasarlanmıştır. Geleneksel teknolojilerle yapılmıştır.",
    "p-detail3": "Canvas ile yapılmış bir çizim uygulaması. Kullanıcı çizim yapabilir, silebilir, rengi değiştirebilir, fırça boyutunu ayarlayabilir, tuvali indirebilir ve resim ekleyebilir.",
    "p-detail4": "Bir resim paylaşım sitesi. Görüntüyü kaydeder ve kullanıcıya bir URL verir. Ayrıca, kullanım kolaylığı için URL'yi kısaltabilir. Firebase veritabanını kullanır."

  }
}
</i18n>

<script>
export default {};
</script>

<style lang="scss" scoped>
#works {
  width: 100%;
  height: max-content;
  padding: 20vh 0 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    margin-bottom: 5vh;
    color: $p-color;
    width: 40vh;
  }
  .projects {
    .project {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 5vh 10vh 20vh 10vh;
      .image-container {
        position: relative;

        img {
          position: relative;
          width: 45vw;
          border-radius: 0.8vh;
          box-shadow: 0 12px 10px rgba(0, 0, 0, 0.5);
          transition: all 500ms;
          &:hover {
            transform: scale(1.03);
          }
        }
      }

      .texts {
        width: 65vh;
        z-index: 44;
        margin: 0;
        padding: 0;
        h3 {
          margin-bottom: 3vh;
          color: $text-color;
          font-size: 3.5vh;
        }
        .text {
          margin-bottom: 5vh;
          font-size: 2vh;
          border-radius: 0.8vh;
          background: rgba(41, 41, 41, 0.95);
          padding: 3vh;
          box-shadow: 0 12px 10px rgba(0, 0, 0, 0.5);
          opacity: 1;
        }
        .tags {
          margin-bottom: 3vh;
          display: flex;
          flex-direction: row;
          p {
            border-radius: 0.5vh;
            font-size: 1.6vh;
          }
        }
        .links {
          clear: both;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          float: right;
          flex-direction: row;
          svg {
            padding: 0;
            width: 3vh;
            height: 3vh;
            transition: all 400ms;
            fill: $text-color;
            &:hover {
              fill: $p-color;
            }
          }
        }
      }
    }
    .right {
      text-align: left;
      .texts {
        margin-right: -10vh;
        .tags {
          float: left;
          p {
            margin-right: 2vh;
          }
        }
        .links {
          float: left;
          svg {
            margin-right: 2.5vh;
          }
        }
      }
    }
    .left {
      text-align: right;
      .texts {
        margin-left: -10vh;
        .tags {
          float: right;
          p {
            margin-left: 2vh;
          }
        }
        .links {
          float: right;
          svg {
            margin-left: 2.5vh;
          }
        }
      }
    }
  }
  @media #{$ls-tablets, $sm-tablets} {
    padding: 10vh 5vh;
    margin: 0;
    .projects {
      .project {
        .image-container {
          img {
            width: 55vh;
          }
        }
        margin: 2vh;
      }
    }
  }
  @media #{$xs-mobile, $s-tablets} {
    padding: 10vh 4vh;
    margin: 0;
    .projects {
      .project {
        flex-direction: column;
        padding-top: 5vh;
        margin: 0;
        margin: 0vh;

        .image-container {
          width: max-content;
          img {
            width: 75vw;
          }
        }
      }
      .left {
        .texts {
          margin: 0;
          margin-top: 4vh;
          width: 100%;
        }
      }
      .right {
        margin-top: 4vh;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        .image-container {
          margin-top: 4vh;
        }
        .texts {
          margin: 0;
          margin-top: 4vh;
          width: 100%;
        }
      }
    }
  }
}
</style>