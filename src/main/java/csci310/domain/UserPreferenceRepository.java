package csci310.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserPreferenceRepository extends JpaRepository<UserPreference, Long> {
    @Query("SELECT u FROM UserPreference u WHERE u.username = :username AND u.pgdId = :pgdId AND u.eventId = :eventId")
    Optional<UserPreference> findById(@Param("username") String username, @Param("pgdId") long pgdId, @Param("eventId") long eventId);

    @Query("SELECT CASE WHEN count(u)>0 THEN true ELSE false END FROM UserPreference u WHERE u.username = :username AND u.pgdId = :pgdId AND u.eventId = :eventId")
    Boolean existsById(@Param("username") String username, @Param("pgdId")long pgdId, @Param("eventId") long eventId);
}