import { Component } from '@angular/core';
import { BlogEntity } from './BlogEntity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogPosts: BlogEntity[] = [];

  constructor() {
    this.blogPosts = [
      {
        "imgUrl": "https://picsum.photos/seed/1/400",
        "blogText": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque suscipit id mauris sed laoreet. Cras sit amet urna id nibh rutrum pellentesque. Praesent laoreet elit et dui tincidunt euismod. Nulla facilisi. Vestibulum in ante enim. Integer bibendum lacus vel varius blandit. Nulla ligula lacus, sagittis nec rutrum vel, feugiat eget sem. Nullam finibus convallis mattis. Morbi ultricies, ex vel congue pharetra, elit turpis efficitur dolor, sed ultricies nisl velit venenatis erat. Nullam ut egestas lorem, vel aliquet ipsum. Morbi fermentum porttitor nibh. Praesent lacus metus, sodales nec nisi vel, mattis egestas ex. Pellentesque vestibulum ullamcorper sapien id scelerisque."
      },
      {
        "imgUrl": "https://picsum.photos/seed/2/400",
        "blogText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque ipsum, in facilisis mauris tincidunt vitae. Aliquam faucibus sit amet erat vel tincidunt. Aliquam ac sapien purus. Aliquam erat volutpat. Ut condimentum pharetra leo. Sed tempor tincidunt rhoncus. Cras egestas tellus mi, nec condimentum eros volutpat id. Curabitur vel suscipit arcu. Maecenas dolor ligula, scelerisque vitae orci sit amet, egestas tempor magna."
      },
      {
        "imgUrl": "https://picsum.photos/seed/3/400",
        "blogText": "Integer posuere vestibulum nunc at faucibus. Nulla facilisi. Mauris vehicula iaculis erat non consectetur. Sed mattis nisl facilisis enim vestibulum, sit amet sodales velit lobortis. Maecenas nunc orci, ullamcorper in consequat nec, pharetra eu nisi. Aliquam vitae erat nec ex placerat volutpat eget vulputate nisi. Pellentesque egestas viverra arcu, eget suscipit mi efficitur quis. Praesent vehicula, metus vel tempus molestie, velit tortor scelerisque turpis, non facilisis lectus purus in massa. Nulla luctus commodo dolor."
      },
      {
        "imgUrl": "https://picsum.photos/seed/1/400",
        "blogText": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque suscipit id mauris sed laoreet. Cras sit amet urna id nibh rutrum pellentesque. Praesent laoreet elit et dui tincidunt euismod. Nulla facilisi. Vestibulum in ante enim. Integer bibendum lacus vel varius blandit. Nulla ligula lacus, sagittis nec rutrum vel, feugiat eget sem. Nullam finibus convallis mattis. Morbi ultricies, ex vel congue pharetra, elit turpis efficitur dolor, sed ultricies nisl velit venenatis erat. Nullam ut egestas lorem, vel aliquet ipsum. Morbi fermentum porttitor nibh. Praesent lacus metus, sodales nec nisi vel, mattis egestas ex. Pellentesque vestibulum ullamcorper sapien id scelerisque."
      },
      {
        "imgUrl": "https://picsum.photos/seed/2/400",
        "blogText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque ipsum, in facilisis mauris tincidunt vitae. Aliquam faucibus sit amet erat vel tincidunt. Aliquam ac sapien purus. Aliquam erat volutpat. Ut condimentum pharetra leo. Sed tempor tincidunt rhoncus. Cras egestas tellus mi, nec condimentum eros volutpat id. Curabitur vel suscipit arcu. Maecenas dolor ligula, scelerisque vitae orci sit amet, egestas tempor magna."
      },
      {
        "imgUrl": "https://picsum.photos/seed/3/400",
        "blogText": "Integer posuere vestibulum nunc at faucibus. Nulla facilisi. Mauris vehicula iaculis erat non consectetur. Sed mattis nisl facilisis enim vestibulum, sit amet sodales velit lobortis. Maecenas nunc orci, ullamcorper in consequat nec, pharetra eu nisi. Aliquam vitae erat nec ex placerat volutpat eget vulputate nisi. Pellentesque egestas viverra arcu, eget suscipit mi efficitur quis. Praesent vehicula, metus vel tempus molestie, velit tortor scelerisque turpis, non facilisis lectus purus in massa. Nulla luctus commodo dolor."
      }
    ];
  }

}
