package org.ntg.test.userbackend.repo;

import org.ntg.test.userbackend.entities.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<Users,Long> {

   @Query(value = "select *  from Users  Where user_name like '%' || :name || '%'",nativeQuery = true )
   List<Users> findByName(@Param("name") String name);


   Users findByNameAndPassword(String name , String password);

}
