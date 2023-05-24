const $get    = document.querySelector.bind( document );
const $getAll = document.querySelectorAll.bind( document );

function handleSearch() {
  const NUM_OF_TAGS = 10;

  var tagInput      = $get('#search__input');
  var tagsList      = $get('.search__tags');
  var tagsQnt       = $get('.search__remaining-tags span');
  var tagsQntParent = $get('.search__remaining-tags');
  var removeAllBtn  = $get('.search__remove-all');

  var tags = [];

  function removeTag(index, element) {
    element.remove();
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    console.log (tags );
    updateTagsQuantity();
  }

  function renderTags(tagsName) {
    var html = tags.map(function(tag, index) {
      return /*html*/ `<li>${tag}<i class='bx bx-x'"></i></li>`;
    });

    tagsList.innerHTML = html.join('\n'); 
    tagsList.querySelectorAll('i').forEach(function(removeBtn, index) {
      removeBtn.onclick = function () {
        removeTag(index, this.parentElement);
      }
    });
  }

  function addTags(tagsName) {
    {  
      tagsName = tagsName.trim();
      tagsName = tagsName.replace(/ [\W]+/g, ' ');
      tagsName = tagsName.split(/ ?, ?/);
    }
    
    if (tagsName.length <= (NUM_OF_TAGS - tags.length)) {
      tagsName.forEach(function(tag) {
        tags.push(tag);
      });
    }
  }

  function updateTagsQuantity() {
    var len = tags.length;
    tagsQnt.innerText = NUM_OF_TAGS - len;
    
    if (len == NUM_OF_TAGS) {
      tagsQntParent.style.color = 'red';
    } else {
      tagsQntParent.style.color = '#000';
    }
  }

  // Add a tag to tags list by hitting `Enter`
  tagInput.addEventListener('keydown', function(evt) {
    if (evt.which == 13) {
      // Clear example tag name
      if (tags.length == 0) {
        tagsList.innerHTML = '';
      }

      // Limit tags
      if (tags.length <= 10) {
        addTags(this.value);
        renderTags();
        updateTagsQuantity();
      }

      // Reset search input
      this.value = ''; 
    }
  });


  // Remove all tags
  removeAllBtn.addEventListener('click', function() {
    tagsList.innerHTML = '';
    tags.splice(0, tags.length);
    updateTagsQuantity();
  })
}

handleSearch();