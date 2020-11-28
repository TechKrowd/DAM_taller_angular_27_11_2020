package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Producto;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;


/**
 * Spring Data Elasticsearch repository for the {@link Producto} entity.
 */
public interface ProductoSearchRepository extends ElasticsearchRepository<Producto, Long> {
}
