package csci310.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UnavailabilityDateRepository extends JpaRepository<UnavailabilityDate, Long> {
    UnavailabilityDate findByUsername(String username);
    Boolean existsByUsername(String username);
}